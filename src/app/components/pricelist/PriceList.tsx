"use client";

import {
    Column,
    Flex,
    Heading,
    Text,
    Accordion,
    Icon,
    SmartLink
} from "@/once-ui/components";
import React, { useState } from "react";
import classNames from "classnames";
import styles from "./PriceList.module.scss";

interface Service {
    name: string;
    price?: string;
    description?: string;
    details?: string[];
    popular?: boolean;
    new?: boolean;
    children?: Service[];
}

interface PriceListProps {
    services: Service[];
}

const PriceList = ({ services }: PriceListProps) => {
    const [open, setOpen] = useState<Set<string>>(new Set());

    const toggle = (path: string) => {
        setOpen((prev) => {
            const updated = new Set(prev);
            const segments = path.split("-");

            Array.from(updated).forEach((p) => {
                const isAncestor = path.startsWith(p);
                const isDescendant = p.startsWith(path);
                const isSameBranch = p.split("-").every((seg, i) => seg === segments[i]);

                if (!isAncestor && !isDescendant && !isSameBranch) {
                    updated.delete(p);
                }
            });

            if (updated.has(path)) {
                updated.delete(path);
            } else {
                updated.add(path);
            }

            let parent = segments.slice(0, -1).join("-");
            while (parent) {
                updated.add(parent);
                parent = parent.split("-").slice(0, -1).join("-");
            }

            return updated;
        });
    };

    const render = (item: Service, depth: number, path: string): React.ReactNode => {
        const isOpen = open.has(path);

        return (
            <Column
                key={path}
                fillWidth
                className={classNames(styles.serviceContainer)}
                border="surface"
                radius="xl"
                margin="m"
                padding="s"
            >
                <Accordion
                    fillWidth
                    isOpen={isOpen}
                    onToggle={() => toggle(path)}
                    title={
                        <Flex gap="xs" vertical="center">
                            <Icon
                                name={depth === 0 ? "docCurrencyEuro" : "sparkle"}
                                onBackground="brand-medium"
                                className={styles.categoryIcon}
                            />
                            <Column>
                                <Heading as="h2" variant="heading-strong-s">
                                    {item.name}
                                </Heading>
                                {depth === 0 && item.description && (
                                    <Text variant="body-default-s" color="neutral-medium">
                                        {item.description}
                                    </Text>
                                )}
                            </Column>
                        </Flex>
                    }
                >
                    {depth === 0 ? (
                        <Column gap="xs">
                            {item.details?.[0] && (
                                <Text variant="body-default-s" color="neutral-medium">
                                    {item.details[0]}
                                </Text>
                            )}
                            {item.children?.map((sub, i) => render(sub, depth + 1, `${path}-${i}`))}
                        </Column>
                    ) : (
                        <Column gap="xs" padding="s">
                            {item.description && (
                                <Column background="surface" padding="s" radius="xl">
                                    <Text variant="body-default-s" onBackground="brand-medium" wrap="balance">
                                        {item.description}
                                    </Text>
                                </Column>
                            )}
                            {item.children?.map((s, i) =>
                                s.children ? (
                                    render(s, depth + 1, `${path}-${i}`)
                                ) : (
                                    <Flex
                                        key={`${path}-${i}`}
                                        horizontal="space-between"
                                        vertical="center"
                                        padding="s"
                                        radius="xl"
                                        className={styles.serviceItem}
                                        background="surface"
                                    >
                                        <Flex gap="m" vertical="center">
                                            <Icon name="heart" size="l" onBackground="brand-medium" />
                                            <Column>
                                                <Text variant="body-strong-m">{s.name}</Text>
                                                {s.description && (
                                                    <Text variant="body-default-s" color="neutral-medium">
                                                        {s.description}
                                                    </Text>
                                                )}
                                            </Column>
                                        </Flex>
                                        <Text variant="body-default-m" onBackground="brand-medium">
                                            {s.price}
                                        </Text>
                                    </Flex>
                                )
                            )}
                        </Column>
                    )}
                </Accordion>
            </Column>
        );
    };

    return (
        <Column fillWidth className={styles.container}>
            {services.map((cat, i) => render(cat, 0, `${i}`))}

            <Flex
                center
                gap="s"
                padding="l"
                className={styles.footer}
            >
                <Icon name="heart" size="m" onBackground="brand-medium" />
                <Text align="center" variant="body-default-s">
                    Alle Preise inkl. MwSt. & Vorbereitung {' '}
                    <SmartLink
                        href="/beratung"
                        color="accent-solid-medium"
                        className={styles.consultationLink}
                    >
                        Persönliche Beratung vereinbaren
                    </SmartLink>
                </Text>
            </Flex>
        </Column>
    );
};

PriceList.displayName = "PriceList";

export default PriceList;