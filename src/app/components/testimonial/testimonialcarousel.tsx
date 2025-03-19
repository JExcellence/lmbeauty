
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
        <Column fillWidth horizontal="center" paddingY="xl" zIndex={3} gap="40" borderBottom={"surface"}>
            <Heading variant="display-strong-xs" align="center">
                Was meine Kunden sagen
            </Heading>
            <Text
                as="p"
                align="center"
                variant="body-strong-l"
                padding="s"
                className={styles.testimonialDescription}
            >
                Dein Feedback ist mir enorm wichtig – es zeigt, wie sehr ich mich um Deine Wünsche kümmere
                und trägt maßgeblich zu meiner stetigen Verbesserung bei. Schau auch gerne auf <SmartLink
                    href={"https://www.google.com/search?sca_esv=a702c171394dd447&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzQlQMm-w3GnbBczvXvBLK8ZB1TqIuY4jauDfalwPXB8xcyM4wbdOxP0sEZJNjh7_RK8BC2enlM_kq0xdc1Le9rr0dcqM&q=LM+Beauty+Rezensionen&sa=X&ved=2ahUKEwiEu9CwiJeMAxXqSvEDHZMANgYQ0bkNegQIJBAE&biw=1920&bih=953&dpr=1"}
                    prefixIcon={"sparkle"}

                > Google </SmartLink> vorbei, denn Deine Rückmeldungen bedeuten mir wirklich viel.
            </Text>

            <Column
                maxWidth={60}
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
                                gradient={{
                                    display: true,
                                    x: 50,
                                    y: 50,
                                    width: 50,
                                    height: 25,
                                    tilt: -40,
                                    opacity: 60,
                                    colorStart: "accent-background-strong",
                                    colorEnd: "page-background"
                                }}
                            >
                                <Flex padding="40" fillWidth zIndex={3} textVariant="label-default-l">
                                    <Text
                                        wrap="balance"
                                        variant="heading-default-m"
                                        className={styles.testimonialText}
                                    >
                                        {testimonial.content}
                                    </Text>
                                </Flex>
                                <Flex
                                    zIndex={1}
                                    borderTop="neutral-medium"
                                    fillWidth
                                    paddingY="24"
                                    paddingX="40"
                                    textVariant="label-default-l"
                                >
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
