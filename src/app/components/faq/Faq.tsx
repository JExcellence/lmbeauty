"use client";

import React, { useState, ReactNode, useCallback } from "react";
import {
    Accordion,
    Column,
    Flex,
    Heading,
    Line,
    SmartLink,
    Text,
} from "@/once-ui/components";
import { schema } from "@/once-ui/resources/config";

interface FaqProps {
    title?: ReactNode;
    description?: ReactNode;
    content: { title: ReactNode; content: ReactNode }[];
}

const Faq = ({ title, description, content }: FaqProps) => {
    const [active, setActive] = useState<number | null>(null);

    const toggle = useCallback(
        (index: number) => {
            setActive(active === index ? null : index);
        },
        [active]
    );

    return (
        <Flex fillWidth direction="column" center maxWidth={50} padding="xl">
            <Column maxWidth="l" align="center">
                {title && (
                    <Heading
                        as="h2"
                        variant="heading-strong-xl"
                        align="center"
                        marginBottom="xs"
                    >
                        {title}
                    </Heading>
                )}

                {description && (
                    <Text
                        align="center"
                        onBackground="neutral-medium"
                        variant="body-default-xl"
                        marginBottom="m"
                    >
                        {description}
                    </Text>
                )}

                <Column
                    radius="l"
                    border="neutral-medium"
                    overflow="hidden"
                    background="surface"
                    center
                >
                    {content.map(({ title, content }, index) => (
                        <React.Fragment key={index}>
                            <Accordion
                                isOpen={active === index}
                                onToggle={() => toggle(index)}
                                title={title}
                            >
                                <Text
                                    variant="body-default-s"
                                    onBackground="neutral-medium"
                                >
                                    {content}
                                </Text>
                            </Accordion>
                            <Line />
                        </React.Fragment>
                    ))}
                </Column>

                <Text
                    align="center"
                    wrap="balance"
                    variant="body-default-s"
                    onBackground="neutral-medium"
                    marginTop="m"
                >
                    Du hast weitere Fragen? Dann melde dich gerne bei mir unter{" "}
                    <SmartLink href={`mailto:${schema.email}`}>
                        {schema.email}
                    </SmartLink>
                </Text>
            </Column>
        </Flex>
    );
};

Faq.displayName = "Faq";

export default Faq;
