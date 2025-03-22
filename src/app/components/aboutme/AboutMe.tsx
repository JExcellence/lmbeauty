"use client";

import {
    Avatar,
    Column,
    Flex,
    Heading,
    Text,
    Badge, Row, Background, RevealFx
} from "@/once-ui/components";

import React from "react";
import styles from "./AboutMe.module.scss"

export const About = () => (
    <Column fillWidth horizontal="center" gap="80" paddingY="l" position="relative">
        <Background
            position="absolute"
            zIndex={1}
            mask={{
                x: 50,
                y: 50,
                radius: 60
            }}
            gradient={{
                display: true,
                x: 50,
                y: 50,
                width: 50,
                height: 50,
                tilt: -20,
                opacity: 70,
                colorStart: "accent-background-strong",
                colorEnd: "page-background"
            }}
            grid={{
                display: false,
                opacity: 100,
                width: "0.25rem",
                color: "neutral-alpha-medium",
                height: "0.25rem"
            }}
        />
        <RevealFx translateY="32" delay={1.6} fillWidth horizontal="center" paddingBottom="s" zIndex={2}>
            <Column fillWidth horizontal="center">
                <Avatar
                    src="/images/avatar/avatar_1.png"
                    size="xl"
                    shadow="l"
                    border="accent-weak"
                    borderWidth={2}
                    statusIndicator={{ color: "green" }}
                />
            </Column>
        </RevealFx>

        <Column gap="32" zIndex={2} fillWidth>
            <RevealFx translateY="48" delay={1.8} fillWidth horizontal="center" paddingBottom="s" zIndex={2}>
                <Heading variant="display-strong-xs" align="center">
                    Hallo, schön, dass du hier bist! 🌸
                </Heading>
            </RevealFx>

            <RevealFx translateY="64" delay={1.9} fillWidth horizontal="center" paddingBottom="s" zIndex={2}>
                <Text align="center" variant="body-default-l" onBackground="neutral-medium">
                    Hi, ich bin Lisa – Deine Expertin für Schönheit und Selbstbewusstsein.
                    Meine Mission ist es, deine natürliche Schönheit hervorzuheben und dich rundum wohlzufühlen.
                    Ob Wimpernstyling oder Nageldesign – ich biete dir Behandlungen, die zu dir und deinen Wünschen passen.
                    Mit viel Erfahrung und Leidenschaft für Ästhetik setze ich auf Perfektion, die nicht nur ein Traum bleiben soll.
                    Deine Schönheit verdient nur das Beste, jeden Tag und für besondere Anlässe.

                    LM Beauty – wo Stil und Professionalität verschmelzen.
                    Buche jetzt deinen Wimperntraum und lass uns gemeinsam dein Strahlen unterstreichen! 🌸
                </Text>
            </RevealFx>

            <RevealFx translateY="64" delay={2.0} fillWidth horizontal="center" paddingBottom="s" zIndex={2}>
                <Row gap="16" direction="column" center>
                    <Column className={styles.container}>
                        <Flex
                            gap="16"
                            padding="4"
                            className={styles.scrollContainer}
                        >
                            {[...Array(4)].map((_, idx) => (
                                <Row key={idx} gap="16">
                                    <Badge
                                        background="accent-alpha-weak"
                                        textVariant="body-default-s"
                                        icon="sparkle"
                                        className={styles.badge}
                                    >
                                        Mehr als 5 Jahre Erfahrung im Beauty Bereich
                                    </Badge>
                                    <Badge
                                        background="accent-alpha-weak"
                                        textVariant="body-default-s"
                                        icon="heart"
                                        className={styles.badge}
                                    >
                                        Mehr als 100 zufriedene Kundinnen
                                    </Badge>
                                    <Badge
                                        background="accent-alpha-weak"
                                        textVariant="body-default-s"
                                        icon="sparkle"
                                        className={styles.badge}
                                    >
                                        Trends & Qualität vereint Immer am Puls der Zeit.
                                    </Badge>
                                    <Badge
                                        background="accent-alpha-weak"
                                        textVariant="body-default-s"
                                        icon="clock"
                                        className={styles.badge}
                                    >
                                        Flexible Öffnungszeiten
                                    </Badge>
                                    <Badge
                                        background="accent-alpha-weak"
                                        textVariant="body-default-s"
                                        icon="users"
                                        color="brand-solid-medium"
                                        className={styles.badge}
                                    >
                                        Individuelle Beratung & Personalisierung
                                    </Badge>
                                    <Badge
                                        background="brand-alpha-weak"
                                        textVariant="body-default-s"
                                        icon="trending"
                                        color="brand-solid-medium"
                                        className={styles.badge}
                                    >
                                        Zufriedenheitsgarantie
                                    </Badge>
                                    <Badge
                                        background="accent-alpha-weak"
                                        textVariant="body-default-s"
                                        icon="gift"
                                        color="brand-solid-medium"
                                        className={styles.badge}
                                    >
                                        Geschenkgutscheine & Pakete verfügbar
                                    </Badge>
                                </Row>
                            ))}
                        </Flex>
                    </Column>
                </Row>
            </RevealFx>
        </Column>
    </Column>
);