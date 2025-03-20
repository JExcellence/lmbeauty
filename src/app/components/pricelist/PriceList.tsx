"use client";

import { Column, Flex, Heading, Text, Accordion, Icon, Badge, SmartLink, Line } from "@/once-ui/components";
import React, { useState } from "react";
import styles from './PriceList.module.scss';

interface Service {
    category: string;
    name: string;
    price: string;
    duration: string;
    description: string;
    details?: string[];
    popular?: boolean;
    new?: boolean;
}

interface PriceListProps {
    services: Service[];
    theme?: {
        color?: string;
        borderColor?: string;
    };
}

export const PriceList = ({ services, theme }: PriceListProps) => {
    const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
    const categories = [...new Set(services.map(s => s.category))];

    const getServiceId = (category: string, index: number) => `${category}-${index}`;

    return (
        <Column
            fillWidth
            radius="l"
            border="neutral-medium"
            background="surface"
            style={{ borderColor: theme?.borderColor }}
            className={styles.priceListContainer}
        >
            <Flex
                background="neutral-strong"
                padding="16"
                horizontal="space-between"
                className={styles.tableHeader}
            >
                <Text as="h4" variant="label-strong-m">Service</Text>
                <Flex gap="40" fitWidth>
                    <Text as="h4" variant="label-strong-m">Dauer</Text>
                    <Text as="h4" variant="label-strong-m">Kosten</Text>
                </Flex>
            </Flex>

            {categories.map((category) => (
                <Column key={category} fillWidth>
                    <Flex
                        padding="16"
                        paddingX="24"
                        background="surface"
                        borderBottom="neutral-weak"
                    >
                        <Heading variant="heading-strong-s" color="neutral-strong">
                            {category}
                        </Heading>
                    </Flex>

                    {services.filter(s => s.category === category).map((service, index) => {
                        const serviceId = getServiceId(category, index);
                        const isActive = activeServiceId === serviceId;

                        return (
                            <Accordion
                                key={serviceId}
                                isOpen={isActive}
                                onToggle={() => setActiveServiceId(isActive ? null : serviceId)}
                                className={styles.serviceAccordion}
                                style={{
                                    '--active-color': theme?.color || 'var(--color-accent-solid-medium)',
                                } as React.CSSProperties}
                            >
                                <Flex
                                    horizontal="space-between"
                                    vertical="center"
                                    className={styles.accordionHeader}
                                >
                                    <Flex gap="16" vertical="center">
                                        <Flex gap="8">
                                            {service.new && (
                                                <Badge
                                                    textVariant="body-default-s"
                                                    color="accent"
                                                    icon="sparkle"
                                                    className={styles.newBadge}
                                                >
                                                    Neu
                                                </Badge>
                                            )}
                                            {service.popular && (
                                                <Badge
                                                    textVariant="body-default-s"
                                                    color="accent"
                                                    icon="star"
                                                    className={styles.popularBadge}
                                                >
                                                    Beliebt
                                                </Badge>
                                            )}
                                        </Flex>

                                        <Column gap="4">
                                            <Heading variant="heading-strong-s">
                                                {service.name}
                                            </Heading>
                                            <Text variant="body-default-s" color="neutral-medium">
                                                {service.description}
                                            </Text>
                                        </Column>
                                    </Flex>

                                    <Flex gap="40" fitWidth>
                                        <Text variant="body-strong-m">{service.duration}</Text>
                                        <Text variant="body-strong-m">{service.price}</Text>
                                    </Flex>
                                </Flex>

                                <Column gap="16" paddingTop="16">
                                    {service.details?.map((detail, i) => (
                                        <Flex key={i} gap="12" vertical="center">
                                            <Icon
                                                name="checkCircle"
                                                size="m"
                                                color="accent-solid-medium"
                                            />
                                            <Text variant="body-default-s">{detail}</Text>
                                        </Flex>
                                    ))}

                                    {service.popular && (
                                        <Flex
                                            gap="12"
                                            padding="16"
                                            radius="m"
                                            background="neutral-weak"
                                            vertical="center"
                                            className={styles.popularTag}
                                        >
                                            <Icon name="star" size="s" color="accent-solid-medium" />
                                            <Text variant="body-default-s" color="accent-solid-medium">
                                                Meistgebuchter Service • Empfohlen von 95% der Kundinnen
                                            </Text>
                                        </Flex>
                                    )}
                                </Column>
                            </Accordion>
                        );
                    })}
                </Column>
            ))}

            <Flex
                horizontal="center"
                gap="16"
                padding="24"
                background="neutral-weak"
                className={styles.footer}
            >
                <Icon name="sparkle" size="m" color="accent-solid-medium" />
                <Text align="center" variant="body-default-s" color="neutral-medium">
                    Alle Preise inkl. MwSt. & Vorbereitung •
                    <SmartLink
                        href="/beratung"
                        color={theme?.color}
                        className={styles.consultationLink}
                    >
                        Persönliche Beratung vereinbaren
                    </SmartLink>
                </Text>
            </Flex>
        </Column>
    )
}