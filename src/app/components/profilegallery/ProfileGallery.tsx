"use client";

import {
    Column,
    Grid,
    SegmentedControl,
    Button,
    Heading,
    Row,
    Text,
    Background, ToggleButton,
} from "@/once-ui/components";
import React, { useState } from "react";
import ImageGallery from "@/app/components/gallery/gallery";

const imageData = {
    lashes: [
        { src: "/images/work/einzel/eye/eins_zu_eins_1.jpg", alt: "Wimperntechnik 1:1 in Oldenburg I" },
        { src: "/images/work/einzel/eye/eins_zu_eins_3.jpg", alt: "Wimperntechnik 1:1 in Oldenburg III" },
        { src: "/images/work/einzel/eye/eins_zu_eins_2.jpg", alt: "Wimperntechnik 1:1 in Oldenburg II" },
        { src: "/images/work/einzel/eye/eins_zu_eins_4.jpg", alt: "Wimperntechnik 1:1 in Oldenburg IV" },
        { src: "/images/work/hybrid/eye/hybrid_1.jpg", alt: "Wimperntechnik Hybrid in Oldenburg I" },
        { src: "/images/work/hybrid/eye/hybrid_2.jpg", alt: "Wimperntechnik Hybrid in Oldenburg II" },
        { src: "/images/work/volumen/eye/volumen_4.jpg", alt: "Wimperntechnik Volumen in Oldenburg IV" },
        { src: "/images/work/volumen/eye/volumen_5.jpg", alt: "Wimperntechnik Volumen in Oldenburg V" },
        { src: "/images/work/volumen/eye/volumen_7.jpg", alt: "Wimperntechnik Volumen in Oldenburg VII" },
        { src: "/images/work/volumen/eye/volumen_6.jpg", alt: "Wimperntechnik Volumen in Oldenburg VI" },
    ],
    nails: [
        { src: "/images/work/shellac/nails2.jpg", alt: "Shellac Nägel in Oldenburg II" },
        { src: "/images/work/shellac/nails3.jpg", alt: "Shellac Nägel in Oldenburg III" },
    ],
};

const ProfileGallery = () => {
    const [view, setView] = useState("gallery");

    const GallerySection = (isMobile: boolean) => (
        <Grid
            fill
            gap={isMobile ? "m" : "s"}
            columns={isMobile ? 1 : 2}
            padding="s"
            marginTop="l"
            zIndex={2}
        >
            {isMobile ? (
                <>
                    <ImageGallery clickable={false} position="center" images={imageData.lashes} />
                    <Column fillWidth center>
                        <Button prefixIcon="sparkle" suffixIcon="sparkle" variant="secondary">
                            Zur Showcase von Wimpern (Bald Verfügbar)
                        </Button>
                    </Column>
                    <ImageGallery clickable={false} position="center" images={imageData.nails} />
                    <Column fillWidth center>
                        <Button prefixIcon="sparkle" suffixIcon="sparkle" variant="secondary">
                            Zur Showcase von Shellac (Bald Verfügbar)
                        </Button>
                    </Column>
                </>
            ) : (
                <>
                    <ImageGallery clickable={false} position="center" images={imageData.lashes} />
                    <ImageGallery clickable={false} position="center" images={imageData.nails} />
                    <Column fillWidth center>
                        <Button prefixIcon="sparkle" suffixIcon="sparkle" variant="secondary">
                            Zur Showcase von Wimpern (Bald Verfügbar)
                        </Button>
                    </Column>
                    <Column fillWidth center>
                        <Button prefixIcon="sparkle" suffixIcon="sparkle" variant="secondary">
                            Zur Showcase von Shellac (Bald Verfügbar)
                        </Button>
                    </Column>
                </>
            )}
        </Grid>
    );

    return (
        <Column fillWidth horizontal="center" fill maxWidth={50}>
            <Column fillWidth horizontal="center" paddingY="l" zIndex={3}>
                <Heading as="h2" align="center">
                    Mehr als Wimpern - eine Haltung
                </Heading>
                <Text align="center" variant="body-default-m" wrap="balance">
                    Bei LM Beauty glaube ich an Schönheit, die stärkt statt stresst.
                    Mein Studio ist ein Safe Space für alle, die ihre natürliche Ausstrahlung
                    feiern wollen - ganz ohne Wenn und Aber.
                </Text>
            </Column>

            <SegmentedControl
                paddingX="xl"
                maxWidth={50}
                zIndex={3}
                buttons={[
                    { prefixIcon: "heart", label: "Galerie", value: "gallery" },
                    { prefixIcon: "person", label: "Über mich", value: "about" },
                ]}
                onToggle={setView}
            />

            {view === "gallery" ? (
                <>
                    <Column hide="s">
                        <Background
                            position="absolute"
                            zIndex={1}
                            gradient={{
                                display: true,
                                x: 50,
                                y: 50,
                                width: 50,
                                height: 50,
                                tilt: 0,
                                opacity: 60,
                                colorStart: "accent-background-strong",
                                colorEnd: "page-background",
                            }}
                        />
                        {GallerySection(false)}
                    </Column>
                    <Column show="s">
                        <Background
                            borderBottom="surface"
                            position="absolute"
                            zIndex={1}
                            gradient={{
                                display: true,
                                x: 50,
                                y: 50,
                                width: 50,
                                height: 50,
                                tilt: 0,
                                opacity: 60,
                                colorStart: "accent-background-strong",
                                colorEnd: "page-background",
                            }}
                        />
                        {GallerySection(true)}
                    </Column>
                </>
            ) : (
                <Background
                    borderBottom="surface"
                    position="relative"
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
                        colorEnd: "page-background",
                    }}
                >
                    <Column maxWidth="l" fillWidth gap="16" marginTop="40" paddingX="16" zIndex={2}>
                        <Heading as="h3" variant="display-strong-s">Über mich 🌸</Heading>

                        <Text onBackground="neutral-strong" variant="body-default-l">
                            Hallo und herzlich willkommen! Ich bin Lisa Marie, 23 Jahre alt,
                            staatlich anerkannte Kosmetikerin, zertifizierte Make-up- und Hairstylistin
                            sowie Wimpernstylistin. Seit mehr als 5 Jahren bin ich in der Beauty-Branche tätig
                            und stolze Gründerin von LM Beauty seit 2023.
                        </Text>

                        <Text onBackground="neutral-strong" variant="body-default-m">
                            Als Expertin für strahlende Schönheit habe ich es mir zur Mission gemacht,
                            deine natürliche Ausstrahlung zu betonen. Mit Qualifikationen im Wimpernstyling,
                            Nageldesign und Make-up biete ich dir maßgeschneiderte Behandlungen,
                            die genau auf deine Wünsche zugeschnitten sind.
                        </Text>

                        <Row fillWidth gap="8" wrap data-border="rounded" marginTop="32" paddingY="l" center>
                            <ToggleButton
                                href="https://www.instagram.com/_l.m_beauty_/"
                                prefixIcon="instagram"
                                label="Beauty Instagram"
                                size="l"
                                variant="outline"
                            />
                            <ToggleButton
                                href="https://wa.me/+4915259675346?text=Hey%20Lisa%20%F0%9F%98%8A%20ich%20habe%20deine%20Webseite%20gesehen%20und%20habe%20Interesse%20an%20einem%20Termin."
                                prefixIcon="whatsapp"
                                label="WhatsApp"
                                size="l"
                                variant="outline"
                            />
                            <ToggleButton
                                href="mailto:info@lmbeauty.de"
                                prefixIcon="mail"
                                label="E-Mail"
                                size="l"
                                variant="outline"
                            />
                            <ToggleButton
                                href="https://www.instagram.com/_l.m_beauty_/"
                                prefixIcon="instagram"
                                label="Privat Instagram"
                                size="l"
                                variant="ghost"
                            />
                        </Row>
                    </Column>
                </Background>
            )}
        </Column>
    );
};

ProfileGallery.displayName = "ProfileGallery";

export { ProfileGallery };
