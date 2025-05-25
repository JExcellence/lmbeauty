"use client";

import React, { useContext, useEffect, useState } from "react";
import {
    Accordion,
    Button,
    Column,
    Dialog,
    DialogContext,
    Flex,
    Row,
    SmartLink,
    Switch,
    Text,
} from "@/once-ui/components";

const getCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null;
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1] ?? null;
};

const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

interface CookieConsent {
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
}

export const CookieBanner = () => {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [consent, setConsent] = useState<CookieConsent>({
        functional: false,
        analytics: false,
        marketing: false,
    });

    const { incrementStack, decrementStack } = useContext(DialogContext);

    useEffect(() => {
        if (!getCookie("cookie_consent")) {
            setVisible(true);
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
        decrementStack();
    };

    const handleSave = () => {
        setCookie("cookie_consent", JSON.stringify(consent), 365);
        setVisible(false);
        handleClose();
    };

    const handleAcceptAll = () => {
        const fullConsent: CookieConsent = {
            functional: true,
            analytics: true,
            marketing: true,
        };
        setCookie("cookie_consent", JSON.stringify(fullConsent), 365);
        setVisible(false);
        handleClose();
    };

    const handleDeny = () => {
        setCookie("cookie_consent", "denied", 365);
        setVisible(false);
        handleClose();
    };

    const handleSettingsOpen = () => {
        setOpen(true);
        incrementStack();
    };

    if (!visible) return null;

    return (
        <Flex
            style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 1000 }}
        >
            <Column
                padding="20"
                background="surface"
                border="neutral-medium"
                radius="l"
                gap="8"
                style={{
                    maxWidth: 600,
                    boxShadow: "var(--shadow-l)",
                }}
            >
                <Text variant="body-default-s" marginBottom="12">
                    Wir verwenden Cookies, um Ihr Erlebnis zu verbessern.{" "}
                    <SmartLink href="/datenschutz">Mehr erfahren</SmartLink>
                </Text>

                <Row fillWidth horizontal="space-between" gap="24">
                    <Row gap="8">
                        <Button size="s" variant="primary" onClick={handleAcceptAll}>
                            Alle akzeptieren
                        </Button>
                        <Button size="s" variant="secondary" onClick={handleDeny}>
                            Ablehnen
                        </Button>
                    </Row>
                    <Button size="s" variant="secondary" onClick={handleSettingsOpen}>
                        Einstellungen
                    </Button>
                </Row>
            </Column>

            <Dialog
                isOpen={open}
                onClose={handleClose}
                title="Cookie Einstellungen"
                description="Wählen Sie aus, welche Cookies wir verwenden dürfen:"
                footer={
                    <Row fillWidth horizontal="space-between">
                        <Row gap="8">
                            <Button variant="secondary" onClick={handleAcceptAll}>
                                Alle akzeptieren
                            </Button>
                            <Button variant="secondary" onClick={handleDeny}>
                                Ablehnen
                            </Button>
                        </Row>
                        <Button onClick={handleSave}>Speichern</Button>
                    </Row>
                }
            >
                <Column fillWidth gap="16">
                    {Object.entries({
                        functional: "Funktionale Cookies",
                        analytics: "Analyse Cookies",
                        marketing: "Marketing Cookies",
                    }).map(([key, label]) => (
                        <Row key={key} horizontal="space-between" vertical="center">
                            <Column fillWidth radius="m" border="neutral-medium">
                                <Accordion
                                    title={
                                        <Switch
                                            isChecked={consent[key as keyof CookieConsent]}
                                            onToggle={() =>
                                                setConsent((prev) => ({
                                                    ...prev,
                                                    [key]: !prev[key as keyof CookieConsent],
                                                }))
                                            }
                                            label={label}
                                        />
                                    }
                                >
                                    <Text onBackground="neutral-medium" variant="body-default-s">
                                        {key === "functional" &&
                                            "Ermöglichen grundlegende Website-Funktionen wie Seitennavigation und Zugriff auf geschützte Bereiche."}
                                        {key === "analytics" &&
                                            "Helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern. Sammeln anonymisierte Daten."}
                                        {key === "marketing" &&
                                            "Ermöglichen personalisierte Werbung und Tracking der Kampagnenwirksamkeit."}
                                    </Text>
                                </Accordion>
                            </Column>
                        </Row>
                    ))}

                    <Text onBackground="neutral-weak" variant="body-default-s">
                        Details finden Sie in unserer{" "}
                        <SmartLink href="/datenschutz">Datenschutzerklärung</SmartLink>.
                    </Text>
                </Column>
            </Dialog>
        </Flex>
    );
};

CookieBanner.displayName = "CookieBanner";
