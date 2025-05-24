"use client";

import {
    Column,
    Flex,
    SmartImage,
    Grid,
    SegmentedControl,
    Button, Heading, Row, Text, Background
} from "@/once-ui/components";
import React, { useState } from "react";

export const ProfileGallery = () => {
    const [view, setView] = useState<string>('gallery');

    return (
        <Column fillWidth horizontal="center" position={"relative"}>
            <Column fillWidth horizontal="center" paddingY="xl" zIndex={3} borderTop={"surface"}>
                <Heading variant="display-strong-xs" align="center">
                    Mehr als Wimpern - eine Haltung
                </Heading>
                <Text as="p" align="center" variant={"body-strong-l"} padding="s">
                    Bei LM Beauty glaube ich an Schönheit, die stärkt statt stresst.
                    Mein Studio ist ein Safe Space für alle, die ihre natürliche Ausstrahlung
                    feiern wollen - ganz ohne Wenn und Aber.
                </Text>
            </Column>
            <SegmentedControl zIndex={3}
                buttons={[
                    {
                        prefixIcon: "sparkle",
                        label: "Galerie",
                        value: "gallery",
                    },
                    {
                        prefixIcon: "sparkle",
                        label: "Über mich",
                        value: "about",
                    },
                ]}
                onToggle={(value) => setView(value)}
            />

            {view === 'gallery' && (
                <Grid
                    maxWidth="l" fillWidth gap="16" marginTop="32" paddingX="8" zIndex={2} columns={2} paddingY="48" borderBottom={"surface"}
                >
                    <SmartImage
                        src="/images/eins_zu_eins_1.jpg"
                        alt="Behandlungsbeispiel"
                        aspectRatio="4 / 3"
                        radius="s"
                        border={"surface"}
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_2.jpg"
                        alt="Studio Ambiente"
                        aspectRatio="4 / 3"
                        radius="s"
                        border={"surface"}
                    />
                </Grid>
            )}

            {view === 'about' && (
                <Background
                    borderBottom={"surface"}
                    position={"relative"}
                    zIndex={2}
                    gradient={{
                        display: true,
                        x: 60,
                        y: 60,
                        width: 30,
                        height: 30,
                        tilt: -40,
                        opacity: 90,
                        colorStart: "accent-background-strong",
                        colorEnd: "page-background"
                    }}
                >
                <Column maxWidth="l" fillWidth gap="16" marginTop="40" paddingX="16" zIndex={2}>
                    <Heading as="h3" variant="display-strong-s">Über mich 🌸</Heading>

                    <Text as="p" onBackground="neutral-strong" variant="body-default-l">
                        Hallo und herzlich willkommen! Ich bin Lisa Marie, 23 Jahre alt,
                        staatlich anerkannte Kosmetikerin, zertifizierte Make-up- und Hairstylistin
                        sowie Wimpernstylistin. Seit mehr als 5 Jahren bin ich in der Beauty-Branche tätig
                        und stolze Gründerin von LM Beauty seit 2023.
                    </Text>

                    <Text as="p" onBackground="neutral-strong" variant="body-default-m">
                        Als Expertin für strahlende Schönheit habe ich es mir zur Mission gemacht,
                        deine natürliche Ausstrahlung zu betonen. Mit Qualifikationen im Wimpernstyling,
                        Nageldesign und Make-up biete ich dir maßgeschneiderte Behandlungen,
                        die genau auf deine Wünsche zugeschnitten sind.
                    </Text>

                    <Row fillWidth gap="8" wrap data-border="rounded" marginTop="32" paddingY="l" center>
                        <Button
                            href="https://www.instagram.com/_l.m_beauty_/"
                            prefixIcon="instagram"
                            label="Beauty Instagram"
                            size="l"
                            variant="tertiary"
                        />
                        <Button
                            href="https://wa.me/+4915259675346?text=Hey%20Lisa%20%F0%9F%98%8A%20ich%20habe%20deine%20Webseite%20gesehen%20und%20habe%20Interesse%20an%20einem%20Termin."
                            prefixIcon="whatsapp"
                            label="WhatsApp"
                            size="l"
                            variant="tertiary"
                        />
                        <Button
                            href="mailto:info@lmbeauty.de"
                            prefixIcon="mail"
                            label="E-Mail"
                            size="l"
                            variant="tertiary"
                        />
                        <Button
                            href="https://www.instagram.com/_l.m_beauty_/"
                            prefixIcon="instagram"
                            label="Privat Instagram"
                            size="l"
                            variant="tertiary"
                        />
                    </Row>
                </Column>
                </Background>
            )}
        </Column>
    );
};