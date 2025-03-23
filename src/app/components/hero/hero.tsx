"use client";

import {
    Background,
    Badge,
    Button,
    Column,
    Flex,
    Heading,
    RevealFx,
    Row,
    SmartImage,
} from "@/once-ui/components";
import React from "react";
import styles from "./hero.module.scss";

interface HeroProps {
    fullscreen?: boolean;
}

const Hero: React.FC<HeroProps> = ({ fullscreen = false }) => {
    return (
        <Row
            fillWidth
            className={fullscreen ? styles.fullscreenHero : ""}
            horizontal="center"
            vertical="center"
            style={{ height: "100vh" }}
        >
            <Background
                position={"absolute"}
                mask={{ x: 50, y: 0, radius: 100 }}
                fill
            >
                <RevealFx translateY="s" delay={0.1} horizontal="center">
                    <SmartImage
                        opacity={90}
                        src="/images/background/store.mp4"
                        alt="Video"
                        foreground={{
                            backgroundColor: "rgba(0, 0, 0, 0.15)"
                        }}
                    />
                </RevealFx>
            </Background>
            <Column center zIndex={1} maxWidth="m" marginY="s" gap="m" paddingY="s">
                <RevealFx translateY="s" delay={0.2} fillWidth horizontal="center" paddingBottom="s">
                    <Badge
                        background="neutral-weak"
                        border="surface"
                        href="#contact"
                        textVariant="label-default-l"
                    >
                        Wimperntraum buchen
                    </Badge>
                </RevealFx>
                <RevealFx translateY="m" delay={0.4} horizontal="center">
                    <Heading onSolid="neutral-weak" align="center" variant="display-strong-m">
                        Dein Moment für Schönheit und Selbstbewusstsein.
                    </Heading>
                </RevealFx>
                <RevealFx translateY="m" delay={0.6}>
                    <Heading
                        wrap="balance"
                        align="center"
                        onSolid="neutral-weak"
                        variant="heading-default-xl"
                    >
                        Professionelle Wimpernverlängerung mit persönlichem Touch – von Lisa Marie für dich.
                    </Heading>
                </RevealFx>
                <RevealFx delay={0.6} translateY="m">
                    <Flex gap="m" vertical="center">
                        <Button
                            id="instagram"
                            href="https://www.instagram.com/_l.m_beauty_/"
                            variant="secondary"
                            prefixIcon="instagram"
                            weight="default"
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
        </Row>
    );
};

export { Hero };