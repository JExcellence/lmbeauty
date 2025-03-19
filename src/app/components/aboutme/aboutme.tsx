"use client";

import {
    Avatar,
    Column,
    Flex,
    Heading,
    SmartImage,
    Text,
    Badge, Row, Background
} from "@/once-ui/components";
import React from "react";
import {ProfileGallery} from "@/app/components/profilegallery/ProfileGallery";

export const About = () => (
    <Column fillWidth horizontal="center" gap="128" paddingY="l" position="relative">
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
        <Column fillWidth horizontal="center">
            <Avatar
                src="/images/avatar/avatar_1.png"
                size="xl"
                shadow="l"
                border="accent-weak"
                zIndex={2}
                borderWidth={2}
                statusIndicator={{ color: "green" }}
            />
        </Column>

        <Column gap="32" zIndex={2}>
            <Heading variant="display-strong-xs" align="center">
                Hallo, schön, dass du hier bist! 🌸
            </Heading>

            <Text align="center" variant="body-default-l" onBackground="neutral-medium">
                Hi, ich bin Lisa – Deine Expertin für Schönheit und Selbstbewusstsein.
                Meine Mission ist es, deine natürliche Schönheit hervorzuheben und dich rundum wohlzufühlen.
                Ob Wimpernstyling oder Nageldesign – ich biete dir Behandlungen, die zu dir und deinen Wünschen passen.
                Mit viel Erfahrung und Leidenschaft für Ästhetik setze ich auf Perfektion, die nicht nur ein Traum bleiben soll.
                Deine Schönheit verdient nur das Beste, jeden Tag und für besondere Anlässe.

                LM Beauty – wo Stil und Professionalität verschmelzen.
                Buche jetzt deinen Wimperntraum und lass uns gemeinsam dein Strahlen unterstreichen! 🌸
            </Text>

            <Flex gap="16" direction="column">
                <Row center gap="16">
                    <Badge textVariant="body-default-s" icon="sparkle">
                        Mehr als 5 Jahre Erfahrung im Beauty Bereich
                    </Badge>
                    <Badge textVariant="body-default-s" icon="sparkle">
                        Mehr als 100 zufriedene Kundinnen
                    </Badge>
                    <Badge textVariant="body-default-s" icon="sparkle">
                        Trends & Qualität vereint Immer am Puls der Zeit.
                    </Badge>
                </Row>
            </Flex>
        </Column>
    </Column>
);