"use client";

import {
    Column,
    Flex,
    SmartImage,
    Grid,
    SegmentedControl,
    Button, Heading, Row, Text
} from "@/once-ui/components";
import React, { useState } from "react";

export const ProfileGallery = () => {
    const [view, setView] = useState<string>('gallery');

    return (
        <Column fillWidth horizontal="center">
            <SegmentedControl
                maxWidth={30}
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
                <Grid columns={3} gap="xs" maxWidth="xl" marginTop="xl">
                    <SmartImage
                        src="/images/eins_zu_eins_1.jpg"
                        alt="Behandlungsbeispiel"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_2.jpg"
                        alt="Studio Ambiente"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_3.jpg"
                        alt="Ergebnis"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_1.jpg"
                        alt="Behandlungsbeispiel"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_2.jpg"
                        alt="Studio Ambiente"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_3.jpg"
                        alt="Ergebnis"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_1.jpg"
                        alt="Behandlungsbeispiel"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_2.jpg"
                        alt="Studio Ambiente"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                    <SmartImage
                        src="/images/eins_zu_eins_3.jpg"
                        alt="Ergebnis"
                        aspectRatio="4 / 3"
                        radius="s"
                    />
                </Grid>
            )}

            {view === 'about' && (
                <Column maxWidth="xs" fillWidth gap="16" marginTop="40" paddingX="16">
                    <Heading as="h2" variant="display-strong-s">Über mich</Heading>

                    <Text as="p" onBackground="neutral-medium" variant="body-default-m">
                        Hallo und herzlich willkommen! Ich bin Lisa Marie, 23 Jahre, zertifizierte Make-Up- und Wimpernstylistin.
                        Seit 2017 in der Beauty-Branche tätig und stolze Gründerin von LM Beauty seit 2022.
                    </Text>

                    <Text as="p" onBackground="neutral-medium" variant="body-default-m">
                        Als Expertin für strahlende Schönheit habe ich es mir zur Mission gemacht, deine natürliche Ausstrahlung
                        zu unterstreichen. Mit Qualifikationen in Wimpernstyling, Nageldesign und Make-Up biete ich dir
                        maßgeschneiderte Behandlungen, die genau zu deinen Wünschen passen.
                    </Text>

                    <Row fillWidth gap="8" wrap data-border="rounded" marginTop="24">
                        <Button
                            href="https://www.instagram.com/_l.m_beauty_/"
                            weight="default"
                            prefixIcon="instagram"
                            label="Beauty Instagram"
                            size="s"
                            variant="primary"
                        />
                        <Button
                            href="https://www.instagram.com/_l.m_beauty_/"
                            weight="default"
                            prefixIcon="instagram"
                            label="Privat Instagram"
                            size="s"
                            variant="secondary"
                        />
                        <Button
                            href="https://wa.me/+4915259675346?text=Hey%20Lisa%20%F0%9F%98%8A%20ich%20habe%20deine%20Webseite%20gesehen%20und%20habe%20Interesse%20an%20einem%20Termin."
                            weight="default"
                            prefixIcon="whatsapp"
                            label="WhatsApp"
                            size="s"
                            variant="secondary"
                        />
                        <Button
                            href="mailto:info@lmbeauty.de"
                            weight="default"
                            prefixIcon="email"
                            label="E-Mail"
                            size="s"
                            variant="secondary"
                        />
                    </Row>
                </Column>
            )}
        </Column>
    );
};