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
        >
            <Background
                zIndex={1}
                position="absolute"
                mask={{ x: 50, y: 0, radius: 100 }}
                fill
                vertical="center"
            >
                <SmartImage
                    src="/images/background/hero_section_1.png"
                    priority
                    sizes="(max-width: 1024px) 80vw, 960px"
                    fill
                />
            </Background>
            <Column center zIndex={1} maxWidth={60} marginY={"32"} gap="32" paddingY="xl">
                <RevealFx fillWidth paddingBottom="16" speed="fast">
                    <Badge
                        background="surface"
                        border="surface"
                        href="#contact"
                        textVariant="label-default-l"
                    >
                        Wimperntraum buchen
                    </Badge>
                </RevealFx>
                <RevealFx speed="fast" delay={0.2} translateY="4">
                    <Heading onSolid="neutral-weak" align="center" variant="display-strong-m">
                        Dein Moment für Schönheit und Selbstbewusstsein.
                    </Heading>
                </RevealFx>
                <RevealFx speed="fast" delay={0.4} translateY="12" marginBottom="4">
                    <Heading
                        wrap="balance"
                        align="center"
                        onSolid="neutral-medium"
                        variant="heading-default-xl"
                    >
                        Professionelle Wimpernverlängerung mit persönlichem Touch – von Lisa Marie für dich.
                    </Heading>
                </RevealFx>
                <RevealFx speed="fast" delay={0.6} translateY="16">
                    <Flex gap="16" vertical="center">
                        <Button id="download" href="/" size="m" variant="primary" arrowIcon>
                            Preisliste
                        </Button>
                        <Button
                            id="preisliste"
                            href="#about"
                            variant="primary"
                            prefixIcon="sparkle"
                            weight="default"
                            arrowIcon
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