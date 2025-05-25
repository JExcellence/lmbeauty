"use client";

import React from "react";
import {
    Column,
    Heading,
    Row,
    Text,
    Button,
    Icon,
    Grid,
    Background,
    Flex,
    RevealFx, ToggleButton,
} from "@/once-ui/components";

const contacts = [
    {
        title: "WhatsApp",
        description: "Schicke mir eine Nachricht auf WhatsApp – schnell und unkompliziert.",
        icon: "whatsapp",
        link: {
            label: "WhatsApp öffnen",
            href: "https://wa.me/+4915259675346?text=Hey%20Lisa%20%F0%9F%98%8A%20ich%20habe%20deine%20Webseite%20gesehen%20und%20habe%20Interesse%20an%20einem%20Termin.",
        },
    },
    {
        title: "Kontakt per E-Mail",
        description: "Schreibe mir eine E-Mail, ich freue mich auf deine Nachricht.",
        icon: "mail",
        link: {
            label: "E-Mail senden",
            href: "mailto:info@lmbeauty.de",
        },
    },
    {
        title: "Instagram",
        description: "Folge mir auf Instagram und kontaktiere mich direkt.",
        icon: "instagram",
        link: {
            label: "Zu Instagram",
            href: "https://www.instagram.com/_l.m_beauty_/",
        },
    },
    {
        title: "Termin",
        description: "Direkt über folgenden Link einen Termin vereinbaren.",
        icon: "calendar",
        link: {
            label: "Zum Terminplaner (Bald verfügbar)",
            href: "",
        },
    },
];

const Contact = () => {
    return (
        <Background
            zIndex={1}
            gradient={{
                display: true,
                x: 50,
                y: 50,
                width: 50,
                height: 50,
                tilt: -45,
                opacity: 50,
                colorStart: "brand-background-strong",
                colorEnd: "page-background",
            }}
        >
            <Flex zIndex={3} fill center direction="column" wrap gap="l" padding="xl">
                <Column center gap="xs" paddingX="l" margin="m">
                    <Heading as="h3" align="center" variant="display-strong-xs">
                        Kontaktiere mich
                    </Heading>
                    <Text align="center" variant="heading-default-xs" onBackground="neutral-medium" wrap="pretty">
                        Ich bin immer für dich da - persönlich, professionell, menschlich.
                    </Text>
                </Column>

                <Grid paddingX="l" columns="2" mobileColumns="1" gap="m">
                    {contacts.map(({ title, description, icon, link }, index) => (
                        <Column
                            key={title}
                            padding="m"
                            radius="xl"
                            border="brand-alpha-strong"
                            gap="8"
                        >
                            <Row vertical="center" horizontal="space-between">
                                <Heading as="h4" variant="heading-default-m" marginTop="4">
                                    {title}
                                </Heading>
                                <Icon name={icon} size="m" onBackground="brand-medium" />
                            </Row>
                            <Row vertical="center" horizontal="start">
                                <Text marginBottom="xs" wrap="pretty">
                                    {description}
                                </Text>
                            </Row>
                            <ToggleButton
                                href={link.href}
                                prefixIcon={icon}
                                size="l"
                                variant="outline"
                                weight="default"
                            >
                                {link.label}
                            </ToggleButton>
                        </Column>
                    ))}
                </Grid>

                <Column fillWidth padding="l" gap="s">
                    <RevealFx translateY="16" delay={1.0}>
                        <Column flex={1} minHeight={25} maxHeight={25} radius="s" overflow="hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.2272121889014!2d8.183366776417152!3d53.142016689992765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6df7f0db40171%3A0x3354833b97a2b438!2sLM%20Beauty!5e0!3m2!1sde!2sde!4v1711314320122!5m2!1sde!2sde"
                                width="100%"
                                height="100%"
                                style={{ border: 0, display: "block" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Column>
                    </RevealFx>
                </Column>
            </Flex>
        </Background>
    );
};

Contact.displayName = "Contact";

export { Contact };
