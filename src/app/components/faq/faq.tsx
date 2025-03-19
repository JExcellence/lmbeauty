"use client";

import React, { ReactNode } from "react";
import { Accordion, Background, Column, Heading, Line, SmartLink, Text } from "@/once-ui/components";
import { schema } from "@/once-ui/resources/config";

interface FaqProps {
    title?: ReactNode;
    description?: ReactNode;
    content: Array<{ title: ReactNode; content: ReactNode }>;
}

export const Faq: React.FC<FaqProps> = ({ title, description, content }) => {
    return (
        <Column fillWidth horizontal="center" position="relative">
            <Column maxWidth="xs" horizontal="center" position="relative">
                {title && (
                    <Heading as="h2" variant="display-strong-xs" align="center" marginBottom="8">
                        {title}
                    </Heading>
                )}
                {description && (
                    <Text align="center" onBackground="neutral-medium" variant="body-default-xl" marginBottom="32">
                        {description}
                    </Text>
                )}
                <Column position="relative" fillWidth fitHeight radius="l" border="neutral-medium" overflow="hidden" background="surface">
                    {content.map((item, index) => (
                        <>
                            <Accordion key={index} title={<Text variant="body-default-s">{item.title}</Text>}>
                                <Text variant="body-default-s" onBackground="neutral-medium">{item.content}</Text>
                            </Accordion>
                            {index !== content.length - 1 && <Line/>}
                        </>
                    ))}
                </Column>
                <Text align="center" wrap="balance" variant="body-default-s" onBackground="neutral-medium" marginTop="20">
                    Du hast weitere Fragen? Dann melde dich gerne bei mir unter{" "}
                    <SmartLink href={"mailto:" + schema.email}>{schema.email}</SmartLink>
                </Text>
            </Column>
        </Column>
    );
};