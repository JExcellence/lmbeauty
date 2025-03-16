import { Background, Column, Flex, Heading, Row, Scroller, SmartLink, Tag, Text, User } from "@/once-ui/components";
import React, { ReactNode } from "react";

interface Testimonial {
    content: ReactNode;
    avatar?: string;
    name?: string;
    role?: string;
    link?: string;
    company?: string;
}

interface Props extends Omit<React.ComponentProps<typeof Flex>, "content"> {
    testimonials: Testimonial[];
}

export const Testimonial: React.FC<Props> = ({ testimonials, ...rest }) => (
    <Column fillWidth horizontal="center" gap="64">
        <Column maxWidth="s" gap="16" horizontal="center">
            <Row padding="40" position="relative">
                <Background fill dots={{ display: true, color: "accent-solid-medium", size: "4" }} mask={{ x: 50, y: 50, radius: 5 }} position="absolute" />
                <Tag position="relative" size="l" shadow="xl" variant="accent">Trusted by makers</Tag>
            </Row>
            <Heading variant="display-strong-s" align="center">
                Used by people who don't have time to design
            </Heading>
            <Text align="center" wrap="balance" variant="heading-default-l" onBackground="neutral-medium">
                Design is hard. Once UI takes care of it for you.
            </Text>
        </Column>
        <Scroller>
            {testimonials.map((testimonial, index) => (
                <Background
                    key={index}
                    fillWidth
                    background="surface"
                    radius="l"
                    border="neutral-medium"
                    vertical="space-between"
                    direction="column"
                    position="relative"
                    marginRight="12"
                    minWidth={20}
                    mask={{
                        x: 50,
                        y: 20,
                        radius: 75
                    }}
                    {...rest}
                >
                    <Flex padding="40" fillWidth>
                        <Text wrap="balance" variant="heading-default-m">
                            {testimonial.content}
                        </Text>
                    </Flex>
                    <Flex borderTop="neutral-medium" fillWidth paddingY="24" paddingX="40">
                        {(testimonial.role || testimonial.company) && (
                            <User
                                avatarProps={{ src: testimonial.avatar }}
                                name={testimonial.name}
                                subline={
                                    <>
                                        {testimonial.role}{" "}
                                        {testimonial.link && testimonial.company && (
                                            <SmartLink unstyled href={testimonial.link}>
                                                {testimonial.company}
                                            </SmartLink>
                                        )}
                                    </>
                                }
                            />
                        )}
                    </Flex>
                </Background>
            ))}
        </Scroller>
    </Column>
);
