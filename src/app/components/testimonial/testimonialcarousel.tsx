"use client";

import { Column, Flex, Background, Tag, Heading, Text, User, SmartLink } from "@/once-ui/components";
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
        <Column fillWidth horizontal="start" gap="16">
            <Heading as="h1">Rezensionen</Heading>
            <div
                className={styles.carouselContainer}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    className={styles.carouselTrack}
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={styles.carouselSlide}
                        >
                            <Background
                                fillWidth
                                background="surface"
                                radius="l"
                                border="neutral-medium"
                                vertical="space-between"
                                direction="column"
                                mask={{ x: 50, y: 20, radius: 75, cursor: true }}
                                zIndex={9}
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
                                            avatarProps={{
                                                src: testimonial.avatar,
                                                style: {
                                                    width: '56px',
                                                    height: '56px',
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
                        </div>
                    ))}
                </div>
            </div>
        </Column>
    );
};