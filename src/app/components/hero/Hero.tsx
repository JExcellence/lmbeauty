"use client";

import {
    Background,
    Badge,
    Button,
    Column,
    Flex,
    Heading,
    Media,
    RevealFx,
    Row,
} from "@/once-ui/components";
import React, { ElementType } from "react";

interface HeroProps {
    fullscreen?: boolean;
    as?: ElementType;
}

const Hero: React.FC<HeroProps> = ({ fullscreen = false }) => {
    return (
        <>
            <Column
                fillWidth
                center
                style={{
                    height: '100vh'
                }}
            >
                <Background
                    position="absolute"
                    zIndex={0}
                    mask={{ x: 50, y: 50, radius: 90 }}
                >
                <Media
                    aspectRatio="16 / 9"
                    src="/images/background/store.mp4"
                    alt="Beauty / Wimpern / LM Beauty Laden in Oldenburg"
                    fill
                />
                </Background>
            </Column>
            <Column position="absolute" gap="m" maxWidth={50} center>
                <RevealFx
                    translateY="s"
                    delay={0.2}
                    paddingBottom="s"
                    center
                >
                    <Badge
                        background="page"
                        border="surface"
                        href="#contact"
                        textVariant="label-default-l"
                    >
                        Wimperntraum buchen
                    </Badge>
                </RevealFx>
                <RevealFx translateY="m" delay={0.4} center>
                    <Heading
                        as="h1"
                        align="center"
                        onBackground="accent-medium"
                        variant="heading-strong-xl"
                    >
                        Dein Moment für Schönheit und Selbstbewusstsein.
                    </Heading>
                </RevealFx>

                <RevealFx translateY="m" delay={0.6} center>
                    <Heading
                        as="h2"
                        align="center"
                        onBackground="accent-medium"
                        variant="heading-strong-xl"
                    >
                        Professionelle Wimpernverlängerung mit persönlichem Touch – von Lisa Marie für dich.
                    </Heading>
                </RevealFx>

                <RevealFx delay={0.6} translateY="m" center>
                    <Flex gap="m" vertical="center">
                        <Button
                            id="instagram"
                            href="https://www.instagram.com/_l.m_beauty_/"
                            variant="secondary"
                            prefixIcon="instagram"
                            weight="default"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </Button>
                        <Button
                            id="aboutme"
                            href="#about"
                            variant="secondary"
                            prefixIcon="chevronDown"
                            weight="default"
                            size="m"
                        >
                            Über mich
                        </Button>
                    </Flex>
                </RevealFx>
            </Column>
        </>
    );
};

Hero.displayName = "Hero";

export { Hero };
