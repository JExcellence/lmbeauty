"use client";

import React, { useMemo } from "react";
import {
    Avatar,
    Background,
    Badge,
    Column,
    Flex,
    Heading,
    RevealFx,
    Row,
    Text,
} from "@/once-ui/components";
import classNames from "classnames";
import styles from "./AboutMe.module.scss";

const badgeContent = [
    { icon: "sparkle", text: "Mehr als 5 Jahre Erfahrung im Beauty Bereich" },
    { icon: "heart", text: "Mehr als 100 zufriedene Kundinnen" },
    { icon: "sparkle", text: "Trends & Qualität vereint – Immer am Puls der Zeit." },
    { icon: "clock", text: "Flexible Öffnungszeiten" },
    { icon: "users", color: "brand-solid-medium", text: "Individuelle Beratung & Personalisierung" },
    {
        background: "brand-alpha-weak",
        icon: "trending",
        color: "brand-solid-medium",
        text: "Zufriedenheitsgarantie",
    },
    { icon: "gift", color: "brand-solid-medium", text: "Geschenkgutscheine & Pakete verfügbar" },
];

export const About = () => {
    const content = useMemo(() => [...badgeContent, ...badgeContent], []);

    return (
        <Column
            fill
            center
            gap="xl"
            paddingY="xl"
            position="relative"
        >
            <Background
                position="absolute"
                zIndex={1}
                mask={{ x: 50, y: 50, radius: 45 }}
                gradient={{
                    display: true,
                    x: 50,
                    y: 50,
                    width: 50,
                    height: 50,
                    tilt: -20,
                    opacity: 70,
                    colorStart: "accent-background-strong",
                    colorEnd: "page-background",
                }}
            />

            <Column fillWidth zIndex={2} center>
                <Avatar
                    src="/images/avatar/avatar_1.png"
                    align="center"
                    size="xl"
                />
            </Column>

            <Column gap="m" zIndex={2} fillWidth center>
                <Heading as="h2" variant="heading-strong-xl">
                    Hallo, schön, dass du hier bist! 🌸
                </Heading>

                <Column fill maxWidth={50} paddingX="xl">
                    <Text variant="body-default-m" onBackground="neutral-medium" wrap="balance" align="center">
                        Hi, ich bin Lisa – deine Beauty-Expertin aus <strong>Oldenburg</strong> ✨
                        Mein Ziel ist es, deine natürliche Schönheit zu betonen und dir ein gutes Gefühl zu geben – ganz entspannt und persönlich.
                        Ob <strong>Wimpernstyling</strong> oder <strong>Nageldesign</strong>: Bei mir bekommst du Behandlungen, die zu dir passen – individuell, sorgfältig und mit viel Liebe zum Detail 💅
                        Mit über fünf Jahren Erfahrung weiß ich, worauf es ankommt.
                        <strong> LM Beauty</strong> steht für Vertrauen, Stil und echte Ergebnisse.
                        Ich freue mich darauf, dich kennenzulernen und dein Strahlen zu unterstreichen.🌸
                    </Text>
                </Column>

                <Row gap="m" direction="column" center maxWidth={50} paddingX="xl">
                    <Column className={classNames(styles.container)}>
                        <Flex gap="m" padding="xs" className={classNames(styles.scrollContainer)}>
                            {content.map(({ icon, text, background, color }, index) => (
                                <Badge
                                    key={`badge-${index}`}
                                    icon={icon}
                                    color={color}
                                    background={background ? "accent-alpha-weak" : "surface"}
                                    textVariant="body-default-s"
                                    className={classNames(styles.badge)}
                                >
                                    {text}
                                </Badge>
                            ))}
                        </Flex>
                    </Column>
                </Row>
            </Column>
        </Column>
    );
};

About.displayName = "About";
