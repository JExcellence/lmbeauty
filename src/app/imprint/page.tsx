
"use client";

import {Background, Banner, Column, Flex, Heading, Text, ToastProvider} from "@/once-ui/components";
import {Header} from "@/app/components/header/Header";
import {Footer} from "@/app/components/footer/Footer";
import React from "react";

export default function ImpressumPage() {
    const Impressum = (
        <Column
            padding="xl"
            maxWidth="xl"
            center
            fill
            align="center"
        >
            <Heading as="h1" variant="display-default-l">Impressum</Heading>
            <Text as="p" variant="body-default-s">
                Angaben gemäß § 5 TMG
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                LM Beauty<br />
                Lisa Marie Pinske<br />
                Bloherfelderstraße 40<br />
                26219 Oldenburg<br />
                Deutschland
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Vertreten durch: Lisa Marie Pinske
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Kontakt:<br />
                Telefon: +49 152 59675346<br />
                E-Mail: info@lmbeauty.de
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Umsatzsteuer-ID: Beantragung läuft aktuell noch...
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Lisa Marie Pinske (Anschrift wie oben)
            </Text>
        </Column>
    );

    return (
        <Column
            fillWidth
            style={{
                minHeight: '100vh',
                height: '100vh',
            }}
        >
            <Header />
            <Flex
                flex={1}
                center
                align="center"
            >
                {Impressum}
            </Flex>
            <Footer />
        </Column>
    );
}
