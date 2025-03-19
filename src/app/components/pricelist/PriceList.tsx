"use client";

import { Column, Flex, Heading, Text, Accordion, Icon, Line, Badge, SmartLink } from "@/once-ui/components";
import { useState } from "react";

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
        <Column fillWidth center gap="8" fitHeight radius="l" border="neutral-medium" overflow="hidden" background="surface">
            <Column fillWidth>
                <Flex
                    background="neutral-strong"
                    paddingY="12"
                    paddingX="32"
                    horizontal="space-between"
                >
                    <Text as="h4">Service</Text>
                    <Flex gap="48" width={15}>
                        <Text as="h4">Dauer</Text>
                        <Text as="h4">Kosten</Text>
                    </Flex>
                </Flex>

                {categories.map((category) => (
                    <Column key={category} fillWidth>
                        <Flex
                            padding="24"
                            paddingX="32"
                            background="surface"
                            borderBottom="neutral-weak"
                        >
                            <Heading
                                variant="heading-strong-xs"
                            >
                                {category}
                            </Heading>
                        </Flex>

                        {services.filter(s => s.category === category).map((service, index) => {
                            const serviceId = getServiceId(category, index);
                            const isActive = activeServiceId === serviceId;

                            return (
                                <Column
                                    key={serviceId}
                                    fillWidth
                                    borderBottom="neutral-weak"
                                    transition="micro-medium"
                                >
                                    <Flex
                                        paddingY="24"
                                        paddingX="32"
                                        horizontal="space-between"
                                        cursor="pointer"
                                        onClick={() => setActiveServiceId(isActive ? null : serviceId)}
                                    >
                                        <Flex fillWidth position={"relative"}>
                                            <Flex>
                                                <Flex gap="16" vertical="center">
                                                    {/*{service.new && (
                                                        <Badge
                                                            position={"relative"}
                                                            top="0"
                                                            left="0"
                                                            textVariant="body-default-s"
                                                            background="surface"
                                                            marginLeft="12"
                                                            icon="sparkle"
                                                        >
                                                            Neu
                                                        </Badge>
                                                    )}*/}
                                                    <Text>
                                                        {service.name}
                                                    </Text>
                                                    <Text
                                                        variant="body-default-s"
                                                    >
                                                        {service.description}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>

                                    </Flex>

                                    <Accordion
                                        isOpen={isActive}
                                        onToggle={() => setActiveServiceId(isActive ? null : serviceId)}
                                        style={{
                                            background: 'var(--surface-background)',
                                        }}
                                    >
                                        <Column paddingX="12" paddingY="12" gap="8">
                                            {service.details?.map((detail, i) => (
                                                <Flex
                                                    key={i}
                                                    gap="12"
                                                    paddingY="4"
                                                >
                                                    <Icon
                                                        name="checkCircle"
                                                        size="m"
                                                        color={theme?.color || "accent-solid-medium"}
                                                    />
                                                    <Text variant="body-default-s">
                                                        {detail}
                                                    </Text>
                                                </Flex>
                                            ))}
                                            {service.popular && (
                                                <Flex
                                                    gap="12"
                                                    marginTop="16"
                                                    padding="16"
                                                    radius="m"
                                                    background="neutral-weak"
                                                >
                                                    <Icon name="star" size="s" color="accent-solid-medium" />
                                                    <Text
                                                        variant="body-default-s"
                                                        color="accent-solid-medium"
                                                        style={{ fontWeight: 500 }}
                                                    >
                                                        Meistgebuchter Service • Empfohlen 95% • der Kundinnen
                                                    </Text>
                                                </Flex>
                                            )}
                                        </Column>
                                    </Accordion>
                                </Column>
                            );
                        })}
                    </Column>
                ))}
            </Column>

            <Column
                horizontal="center"
                gap="16"
                padding="24"
                background="neutral-weak"
            >
                <Icon name="sparkle" size="m" color="accent-solid-medium" />
                <Text
                    align="center"
                    variant="body-default-s"
                    color="neutral-medium"
                    style={{ lineHeight: 1.6 }}
                >
                    Alle Preise inkl. MwSt. & Vorbereitung •
                    <SmartLink
                        href="/beratung"
                        style={{marginLeft: 8}}
                        color={theme?.color}
                    >
                        Persönliche Beratung vereinbaren
                    </SmartLink>
                </Text>
            </Column>
        </Column>
    );
};