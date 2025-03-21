"use client";

import { Column, Flex, Heading, Text, Accordion, Icon, Badge, SmartLink, Line } from "@/once-ui/components";
import React, { useState } from "react";
import styles from './PriceList.module.scss';

interface Service {
    category: string;
    name: string;
    price: string;
    description: string;
    details?: string[];
    popular?: boolean;
    new?: boolean;
    children?: Omit<Service, 'category' | 'popular' | 'new'>[]; // Children inherit category
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

    const renderServiceDetails = (service: Service) => (
        <Column gap="16" paddingTop="16" paddingBottom="24">
            {service.details?.map((detail, i) => (
                <Flex key={i} gap="12" vertical="center" style={{ animation: "fadeIn"}}>
                    <Icon name="checkCircle" size="m" color="accent-solid-medium" />
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
                    style={{
                        animation: "slideRight"
                    }}
                >
                    <Icon name="star" size="s" color="accent-solid-medium" />
                    <Text variant="body-default-s" color="accent-solid-medium">
                        Meistgebuchter Service • Empfohlen von 95% der Kundinnen
                    </Text>
                </Flex>
            )}

            {service.children?.map((child, childIndex) => (
                <Flex
                    key={childIndex}
                    gap="24"
                    horizontal="space-between"
                    paddingTop="16"
                    paddingLeft="32"
                    borderLeft="accent-medium"
                    style={{
                        animation: "fadeIn"
                    }}
                >
                    <Flex gap="12" vertical="center">
                        <Icon name="circle" size="s" color="accent-solid-medium" />
                        <Column gap="4">
                            <Text variant="body-strong-s">{child.name}</Text>
                            {child.description && (
                                <Text variant="body-default-s" color="neutral-medium">
                                    {child.description}
                                </Text>
                            )}
                        </Column>
                    </Flex>
                    <Text variant="body-strong-s" color="accent-solid-medium">
                        {child.price}
                    </Text>
                </Flex>
            ))}
        </Column>
    );

    const renderAccordionTitle = (service: Service) => (
        <Flex horizontal="space-between" vertical="center" fillWidth gap="16">
            <Flex gap="16" vertical="center" fillWidth>
                <Flex gap="8">
                    {service.new && (
                        <Badge
                            color="accent"
                            icon="sparkle"
                            textVariant="label-strong-s"
                            style={{
                                animation: "pulse"
                            }}
                        >
                            Neu
                        </Badge>
                    )}
                    {service.popular && (
                        <Badge
                            color="accent"
                            icon="star"
                            textVariant="label-strong-s"
                            style={{
                                animation: "glow"
                            }}
                        >
                            Beliebt
                        </Badge>
                    )}
                </Flex>
                <Column gap="4">
                    <Heading variant="heading-strong-s">{service.name}</Heading>
                    {service.description && (
                        <Text variant="body-default-s" color="neutral-medium">
                            {service.description}
                        </Text>
                    )}
                </Column>
            </Flex>
            <Text variant="heading-strong-m" color="accent-solid-medium">
                {service.price}
            </Text>
        </Flex>
    );

    return (
        <Column
            fillWidth
            radius="l"
            border="neutral-medium"
            background="surface"
            paddingTop="16"
            style={{
                animation: "fadeIn"
            }}
        >
            {categories.map((category) => (
                <Column key={category} fillWidth>
                    <Flex
                        paddingX="24"
                        paddingY="16"
                        background="neutral-weak"
                        gap="12"
                        vertical="center"
                        borderBottom="neutral-medium"
                    >
                        <Icon name="category" size="m" color="accent-solid-medium" />
                        <Heading variant="heading-strong-s">{category}</Heading>
                    </Flex>

                    {services.filter(s => s.category === category).map((service, index) => {
                        const serviceId = getServiceId(category, index);
                        const isActive = activeServiceId === serviceId;

                        return (
                            <Accordion
                                key={serviceId}
                                title={renderAccordionTitle(service)}
                                isOpen={isActive}
                                onToggle={() => setActiveServiceId(isActive ? null : serviceId)}
                                border="neutral-weak"
                                style={{
                                    animation: "slideDown"
                                }}
                            >
                                {renderServiceDetails(service)}
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
                marginTop="16"
                borderTop="neutral-medium"
            >
                <Icon name="sparkle" size="m" color="accent-solid-medium" />
                <Text align="center" variant="body-default-s">
                    Alle Preise inkl. MwSt. & Vorbereitung •
                    <SmartLink
                        href="/beratung"
                        color="accent-solid-medium"
                        style={{
                            marginLeft: "8",
                            animation: "underline"
                        }}
                    >
                        Persönliche Beratung vereinbaren
                    </SmartLink>
                </Text>
            </Flex>
        </Column>
    );
};