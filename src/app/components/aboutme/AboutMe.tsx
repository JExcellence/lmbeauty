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

const badgeContent = [
    {
        icon: "sparkle",
        text: "Mehr als 5 Jahre Erfahrung im Beauty Bereich",
    },
    {
        icon: "heart",
        text: "Mehr als 100 zufriedene Kundinnen",
    },
    {
        icon: "sparkle",
        text: "Trends & Qualität vereint Immer am Puls der Zeit.",
    },
    {
        icon: "clock",
        text: "Flexible Öffnungszeiten",
    },
    {
        icon: "users",
        color: "brand-solid-medium",
        text: "Individuelle Beratung & Personalisierung",
    },
    {
        background: "brand-alpha-weak",
        icon: "trending",
        color: "brand-solid-medium",
        text: "Zufriedenheitsgarantie",
    },
    {
        icon: "gift",
        color: "brand-solid-medium",
        text: "Geschenkgutscheine & Pakete verfügbar",
    },
];

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
        <RevealFx translateY="m" delay={1.6} fillWidth horizontal="center" paddingBottom="s" zIndex={2}>
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

        <Column gap="m" zIndex={2} fillWidth>
            <RevealFx translateY="m" delay={1.8} fillWidth horizontal="center" paddingBottom="s" zIndex={2}>
                <Heading as="h2" variant="display-strong-xs" align="center">
                    Hallo, schön, dass du hier bist! 🌸
                </Heading>

            </RevealFx>

            <RevealFx translateY="l" delay={1.9} fillWidth horizontal="center" paddingBottom="s" zIndex={2} wrap>
                <Text align="center" variant="body-default-l" onBackground="neutral-medium">
                    Hi, ich bin Lisa – Deine Expertin für Schönheit und Selbstbewusstsein in <strong>Oldenburg</strong>.
                    Meine Mission ist es, deine natürliche Schönheit hervorzuheben und dich rundum wohlzufühlen.
                    Ob Wimpernstyling oder Nageldesign – ich biete dir Behandlungen, die zu dir und deinen Wünschen passen.
                    Mit viel Erfahrung und Leidenschaft für Ästhetik setze ich auf Perfektion, die nicht nur ein Traum bleiben soll.
                    Deine Schönheit verdient nur das Beste, jeden Tag und für besondere Anlässe.

                    <strong>LM Beauty</strong> – wo Stil und Professionalität verschmelzen.
                    Buche jetzt deinen Wimperntraum und lass uns gemeinsam dein Strahlen unterstreichen! 🌸
                </Text>
            </RevealFx>

            <RevealFx translateY="l" delay={2.0} fillWidth horizontal="center" paddingBottom="s" zIndex={2}>
                <Row gap="m" direction="column" center>
                    <Column className={styles.container}>
                        <Flex
                            gap="m"
                            padding="xs"
                            className={styles.scrollContainer}
                        >
                            {[...badgeContent, ...badgeContent].map((content, index) => ( // Duplicate content for seamless loop
                                <Badge
                                    key={`badge-item-${index}`}
                                    background="accent-alpha-weak"
                                    textVariant="body-default-s"
                                    icon={content.icon}
                                    color={content.color}
                                    className={styles.badge}
                                >
                                    {content.text}
                                </Badge>
                            ))}
                        </Flex>
                    </Column>
                </Row>
            </RevealFx>
        </Column>
    </Column>
);