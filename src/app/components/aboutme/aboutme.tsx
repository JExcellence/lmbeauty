"use client";

import {
    Avatar,
    Column,
    Flex,
    Heading,
    SmartImage,
    Text,
    Badge, Row
} from "@/once-ui/components";
import React from "react";
import {ProfileGallery} from "@/app/components/profilegallery/ProfileGallery";

export const About = () => (
    <Column fillWidth horizontal="center" gap="128" paddingY="l">
        <Column fillWidth position="relative" horizontal="center">
            <Avatar
                src="/images/avatar/avatar_1.png"
                size="xl"
                shadow="l"
                border="accent-weak"
                borderWidth={2}
                statusIndicator={{ color: "green" }}
            />
        </Column>

        <Column gap="32">
            <Heading variant="display-strong-xs" align="center">
                Hallo, schön, dass du hier bist! 🌸
            </Heading>

            <Text align="center" variant="body-default-l" onBackground="neutral-medium">
                Hi, ich bin Lisa – Deine Expertin für Schönheit und Selbstbewusstsein.
                Meine Mission ist es, deine natürliche Schönheit hervorzuheben und dich rundum wohlzufühlen.
                Ob Wimpernstyling, Haarstyling oder Make-up – ich biete dir Behandlungen, die zu dir und deinen Wünschen passen.
                Mit viel Erfahrung und Leidenschaft für Ästhetik setze ich auf Perfektion, die nicht nur ein Traum bleiben soll.
                Deine Schönheit verdient nur das Beste, jeden Tag und für besondere Anlässe.

                LM Beauty – wo Stil und Professionalität verschmelzen.
                Buche jetzt deinen Wimperntraum und lass uns gemeinsam dein Strahlen unterstreichen! 🌸
            </Text>

            <Flex gap="16" direction="column">
                <Row center gap="16">
                    <Badge textVariant="body-default-s" icon="sparkle">
                        Wimpern-Expertin seit 2017, Selbstständig seit 2023
                    </Badge>
                    <Badge textVariant="body-default-s" icon="sparkle">
                        Mehr als 100 zufriedene Kundinnen
                    </Badge>
                    <Badge textVariant="body-default-s" icon="sparkle">
                        Trends & Qualität vereint Immer am Puls der Zeit.
                    </Badge>
                </Row>
                <Column fillWidth horizontal="center" paddingY="xl" maxWidth={70}>
                    <Heading variant="display-strong-xs" align="center">
                        Mehr als Wimpern - eine Haltung
                    </Heading>

                    <Text align="center">
                        "Bei LM Beauty glaube ich an Schönheit, die stärkt statt stresst.
                        Mein Studio ist ein Safe Space für alle, die ihre natürliche Ausstrahlung
                        feiern wollen - ganz ohne Wenn und Aber."
                    </Text>
                </Column>
            </Flex>
        </Column>
    </Column>
);