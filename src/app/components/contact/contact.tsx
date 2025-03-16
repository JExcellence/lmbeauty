"use client";

import React from "react";
import { Column, Heading, Row, Text, Input, Button, Textarea, AvatarGroup, Icon, Grid, Background } from "@/once-ui/components";

const contacts = [
    {
        title: "WhatsApp",
        description: "Schicke mir eine Nachricht auf WhatsApp – schnell und unkompliziert.",
        icon: "whatsapp",
        link: {
            label: "WhatsApp öffnen",
            href: "https://wa.me/+4915259675346?text=Hey%20Lisa%20%F0%9F%98%8A%20ich%20habe%20deine%20Webseite%20gesehen%20und%20habe%20Interesse%20an%20einem%20Termin."
        }
    },
    {
        title: "Kontakt per E-Mail",
        description: "Schreibe mir eine E-Mail, ich freue mich auf deine Nachricht.",
        icon: "mail",
        link: {
            label: "E-Mail senden",
            href: "mailto:info@lmbeauty.de"
        }
    },
    {
        title: "Instagram",
        description: "Folge mir auf Instagram und kontaktiere mich direkt.",
        icon: "instagram",
        link: {
            label: "Zu Instagram",
            href: "https://www.instagram.com/_l.m_beauty_/"
        }
    },
    {
        title: "Termin",
        description: "Direkt über folgenden Link einen Termin vereinbaren.",
        icon: "calendar",
        link: {
            label: "Zum Terminplaner (Bald verfügbar)",
            href: ""
        }
    },
];

export const Contact = () => {
    return (
        <Column fillWidth fitHeight horizontal="center" gap="64">
            <Background
                position="absolute"
                gradient={{
                    display: true,
                    x: 30,
                    y: 30,
                    width: 100,
                    height: 60,
                    tilt: -45,
                    opacity: 100,
                    colorStart: "brand-background-strong",
                    colorEnd: "static-transparent",
                }}
                dots={{
                    display: true,
                    opacity: 100,
                    color: "page-background",
                    size: "2",
                }}
            />
            <Background
                position="absolute"
                gradient={{
                    display: true,
                    x: 0,
                    y: 30,
                    width: 100,
                    height: 60,
                    tilt: -45,
                    opacity: 100,
                    colorStart: "accent-background-strong",
                    colorEnd: "static-transparent",
                }}
                dots={{
                    display: true,
                    opacity: 100,
                    color: "page-background",
                    size: "2",
                }}
            />
            <Column position="relative" maxWidth={40} gap="12" horizontal="center">
                <Heading as="h3" align="center" variant="display-strong-m">
                    Kontaktiere mich
                </Heading>
                <Text align="center" onBackground="neutral-medium" variant="body-default-xl" wrap="balance">
                    Ich bin immer für dich da – persönlich, professionell, menschlich.
                </Text>
            </Column>
            <Grid
                maxWidth="l"
                position="relative"
                gap="8"
                columns="2" mobileColumns="1">
                {contacts.map((contact, index) => (
                    <Column
                        radius="s"
                        padding="24"
                        border="neutral-medium"
                        key={index}
                        fillWidth
                        gap="8">
                        <Icon
                            name={contact.icon}
                            size="m"
                            onBackground="brand-medium"/>
                        <Heading
                            marginTop="4"
                            as="h4"
                            variant="heading-strong-l">
                            {contact.title}
                        </Heading>
                        <Text
                            marginBottom="16"
                            onBackground="neutral-medium"
                            variant="body-default-s"
                            wrap="balance">
                            {contact.description}
                        </Text>
                        <Button
                            weight="default"
                            data-border="rounded"
                            size="s"
                            href={contact.link.href}
                            variant={contact.title === "WhatsApp" ? "primary" : "secondary"}
                        >
                            {contact.link.label}
                        </Button>
                    </Column>
                ))}
            </Grid>
            <Row position="relative" maxWidth={80} minHeight={30} tabletDirection="column" gap="s">
                <Column flex={1} minHeight={25} maxHeight={25} radius="s" overflow="hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.2272121889014!2d8.183366776417152!3d53.142016689992765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6df7f0db40171%3A0x3354833b97a2b438!2sLM%20Beauty!5e0!3m2!1sde!2sde!4v1711314320122!5m2!1sde!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Column>
                <Column flex={1} gap="16">
                    <Column gap="s" fillWidth marginBottom="32" marginTop="8">
                        <Heading variant="display-strong-xs">
                            Schreib mir eine Nachricht
                        </Heading>
                        <Text variant="body-strong-m" onBackground="neutral-medium" wrap="balance">
                            Ich freue mich darauf, von dir zu hören. Deine Nachricht beantworte ich so schnell wie möglich.
                        </Text>
                    </Column>

                    <Column gap="-1">
                        <Input
                            radius="top"
                            id="name"
                            label="Name"
                            type="text"
                        />
                        <Input
                            radius="none"
                            id="email"
                            label="E-Mail"
                            type="email"
                        />
                        <Textarea
                            style={{minHeight: "4rem"}}
                            radius="bottom"
                            id="message"
                            label="Nachricht"
                            lines="auto"
                        />
                    </Column>
                    <Button id="send" arrowIcon>
                        Nachricht senden
                    </Button>
                </Column>
            </Row>
        </Column>
    );
};
