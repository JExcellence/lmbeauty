"use client";

import React, { useEffect, useState, useContext } from "react";
import {
    Accordion,
    Button,
    Column,
    Dialog, DialogContext,
    Row,
    SmartLink,
    Switch,
    Text,
} from "@/once-ui/components";

const getCookie = (name: string) => {
    if (typeof document === "undefined") return null;
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1];
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
    const [isOpen, setIsOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [consent, setConsent] = useState<CookieConsent>({
        functional: false,
        analytics: false,
        marketing: false,
    });
    const { incrementStack, decrementStack } = useContext(DialogContext);

    useEffect(() => {
        if (!getCookie("cookie_consent")) {
            setShowBanner(true);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        decrementStack();
    };

    const handleSave = () => {
        setCookie("cookie_consent", JSON.stringify(consent), 365);
        setShowBanner(false);
        handleClose();
    };

    const handleAcceptAll = () => {
        const allConsent = { functional: true, analytics: true, marketing: true };
        setCookie("cookie_consent", JSON.stringify(allConsent), 365);
        setShowBanner(false);
        handleClose();
    };

    const handleDeny = () => {
        setCookie("cookie_consent", "denied", 365);
        setShowBanner(false);
        handleClose();
    };

    const handleSettingsOpen = () => {
        setIsOpen(true);
        incrementStack();
    };

    if (!showBanner) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
                zIndex: 1000,
                margin: "0 auto",
                maxWidth: "600px",
                backgroundColor: "var(--surface-background)",
                boxShadow: "var(--shadow-l)",
            }}
        >
            <Column
                padding="20"
                background="surface"
                border="neutral-medium"
                radius="l"
                gap="8"
            >
                <Text variant="body-default-s" marginBottom="12">
                    Wir verwenden Cookies, um Ihr Erlebnis zu verbessern.
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
                isOpen={isOpen}
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
                                        <div onClick={(e) => e.stopPropagation()}>
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
                                        </div>
                                    }
                                >
                                    <Text
                                        onBackground="neutral-medium"
                                        variant="body-default-s"
                                    >
                                        {key === "functional"
                                            ? "Ermöglichen grundlegende Website-Funktionen wie Seitennavigation und Zugriff auf geschützte Bereiche."
                                            : key === "analytics"
                                                ? "Helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern. Sammeln anonymisierte Daten."
                                                : "Ermöglichen personalisierte Werbung und Tracking der Kampagnenwirksamkeit."}
                                    </Text>
                                </Accordion>
                            </Column>
                        </Row>
                    ))}
                    <Text onBackground="neutral-weak" variant="body-default-s">
                        Details finden Sie in unserer{" "}
                        <SmartLink href="/datenschutz">
                            Datenschutzerklärung
                        </SmartLink>
                    </Text>
                </Column>
            </Dialog>
        </div>
    );
};
