"use client";

import { Column, Flex, Heading, Text, Accordion, Icon, Badge, SmartLink, Row } from "@/once-ui/components";
import React, { useState } from "react";
import styles from './PriceList.module.scss';

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

export const PriceList = ({ services }: PriceListProps) => {
    const [activePaths, setActivePaths] = useState<Set<string>>(new Set());

    const toggleAccordion = (currentPath: string) => {
        setActivePaths(prev => {
            const newPaths = new Set(prev);
            const currentParts = currentPath.split('-');

            const pathSegments = currentPath.split('-');

            Array.from(newPaths).forEach(path => {
                const isAncestor = currentPath.startsWith(path);
                const isDescendant = path.startsWith(currentPath);
                const isSameBranch = path.split('-').every((seg, i) => seg === pathSegments[i]);

                if (!isAncestor && !isDescendant && !isSameBranch) {
                    newPaths.delete(path);
                }
            });

            if (newPaths.has(currentPath)) {
                newPaths.delete(currentPath);
            } else {
                newPaths.add(currentPath);
            }

            let currentParent = currentPath.split('-').slice(0, -1).join('-');
            while (currentParent) {
                newPaths.add(currentParent);
                currentParent = currentParent.split('-').slice(0, -1).join('-');
            }

            return newPaths;
        });
    };


    const renderCategory = (category: Service, depth: number, path: string) => {
        const isActive = activePaths.has(path);

        return (
            <Column key={path} fillWidth className={styles.serviceContainer} radius="s" border="surface" padding="xs">
                <Accordion
                    fillWidth
                    title={
                        <Flex gap="s" vertical="center">
                            <Icon
                                name={depth === 0 ? "docCurrencyEuro" : "sparkle"}
                                onBackground="brand-medium"
                                className={styles.categoryIcon}
                            />
                            <Column>
                                <Heading as="h2" variant="heading-strong-s">
                                    {category.name}
                                </Heading>
                                {depth === 0 && (
                                    <Text variant="body-default-s" color="neutral-medium">
                                        {category.description}
                                    </Text>
                                )}
                            </Column>
                        </Flex>
                    }
                    isOpen={isActive}
                    onToggle={() => toggleAccordion(path)}
                >
                    {depth === 0 ? (
                        <Column gap="xs">
                            <Text variant="body-default-s" color="neutral-medium">
                                {category.details?.[0]}
                            </Text>
                            {category.children?.map((sub, index) =>
                                renderCategory(sub, depth + 1, `${path}-${index}`)
                            )}
                        </Column>
                    ) : (
                        <Column
                            gap="xs"
                            padding="s"
                            radius="s-4"
                        >
                            {category.description && (
                                <Column
                                    background="surface"
                                    padding="s"
                                    radius="s"
                                >
                                    <Text
                                        variant="body-default-s"
                                        onBackground="brand-medium"
                                        wrap={"balance"}
                                    >
                                        {category.description}
                                    </Text>
                                </Column>
                            )}
                            {category.children?.map((service, index) => (
                                service.children ? (
                                    renderCategory(service, depth + 1, `${path}-${index}`)
                                ) : (
                                    <Flex
                                        key={`${path}-${index}`}
                                        horizontal="space-between"
                                        vertical="center"
                                        padding="s"
                                        radius="xl"
                                        background="neutral-weak"
                                        className={styles.serviceItem}
                                    >
                                        <Flex gap="m" vertical="center">
                                            <Icon
                                                name="heart"
                                                size="l"
                                                onBackground="brand-medium"
                                            />
                                            <Column>
                                                <Text variant="body-strong-m">{service.name}</Text>
                                                <Text variant="body-default-s" color="neutral-medium">
                                                    {service.description}
                                                </Text>
                                            </Column>
                                        </Flex>
                                        <Text variant="body-default-m" onBackground="brand-medium">
                                            {service.price}
                                        </Text>
                                    </Flex>
                                )
                            ))}
                        </Column>
                    )}
                </Accordion>
            </Column>
        );
    };

    return (
        <Column
            fillWidth
            radius="s"
            border="surface"
            className={styles.container}
        >
            {services.map((category, index) =>
                renderCategory(category, 0, `${index}`)
            )}

            <Flex
                horizontal="center"
                vertical="center"
                gap="s"
                padding="l"
                background="surface"
                className={styles.footer}
            >
                <Icon name="heart" size="m" onBackground="brand-medium" />
                <Text align="center" variant="body-default-s">
                    Alle Preise inkl. MwSt. & Vorbereitung
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