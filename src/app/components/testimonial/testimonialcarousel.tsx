"use client";

import {Column, Flex, Background, Tag, Heading, Text, User, SmartLink, Row} from "@/once-ui/components";
import React, { useEffect, useState } from "react";
import styles from "./testimonialcarousel.module.scss";

interface Testimonial {
    content: React.ReactNode;
    avatar?: string;
    name?: string;
    role?: string;
    link?: string;
    company?: string;
}

interface Props {
    testimonials: Testimonial[];
    autoPlayInterval?: number;
}

export const TestimonialCarousel: React.FC<Props> = ({
                                                         testimonials,
                                                         autoPlayInterval = 5000,
                                                         ...rest
                                                     }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused || testimonials.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % testimonials.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [paused, testimonials.length, autoPlayInterval]);

    return (
        <Column fillWidth horizontal="start" gap="16" maxWidth={40} paddingX="l" paddingY="l" zIndex={3}>
            <Heading as="h1">Rezensionen</Heading>
            <Column
                className={styles.carouselContainer}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <Row
                    className={styles.carouselTrack}
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <Column
                            key={index}
                            className={styles.carouselSlide}
                        >
                            <Background
                                zIndex={1}
                                fillWidth
                                background="neutral-weak"
                                radius="l"
                                border="neutral-medium"
                                vertical="space-between"
                                direction="column"
                                mask={{
                                    x: 50,
                                    y: 50,
                                    radius: 200
                                }}
                                gradient={{
                                    display: true,
                                    x: 50,
                                    y: 50,
                                    width: 50,
                                    height: 50,
                                    tilt: -20,
                                    opacity: 60,
                                    colorStart: "accent-background-strong",
                                    colorEnd: "page-background"
                                }}
                            >
                                <Flex padding="40" fillWidth zIndex={3} textVariant="label-default-l">
                                    <Text wrap="balance" variant="heading-default-m">
                                        {testimonial.content}
                                    </Text>
                                </Flex>
                                <Flex zIndex={1} borderTop="neutral-medium" fillWidth paddingY="24" paddingX="40" textVariant="label-default-l">
                                    {(testimonial.role || testimonial.company) && (
                                        <User
                                            avatarProps={{
                                                src: testimonial.avatar,
                                                style: {
                                                    width: '64px',
                                                    height: '64px',
                                                    objectFit: 'cover'
                                                }
                                            }}
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
                        </Column>
                    ))}
                </Row>
            </Column>
        </Column>
    );
};