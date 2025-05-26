"use client";

import {
    Background,
    Button,
    Column, ElementType,
    Flex,
    Icon,
    Logo,
    Row,
    ScrollToTop,
    SmartLink,
    Text,
} from "@/once-ui/components";

const Footer = () => {

    return (
        <Column gap="l" fillWidth padding="m">
            <Flex vertical="space-between" horizontal="space-between" wrap paddingX="l">
                <Column gap="m" horizontal="start">
                    <Text variant="heading-default-l">LM Beauty</Text>
                    <ElementType key="pricelist" href="#">Produkte (Bald)</ElementType>
                    <ElementType key="partner" href="https://www.jexcellence.de">Entwickelt von JExcellence</ElementType>
                </Column>

                <Column gap="m" horizontal="end">
                    <Text variant="heading-default-l">Unternehmen</Text>
                    <ElementType key="about" href="#about">Über mich</ElementType>
                    <ElementType key="contact" href="#contact">Kontakt</ElementType>
                    <ElementType key="pricelist" href="#pricelist">Preisliste</ElementType>
                </Column>
            </Flex>

            <Flex center direction="column" align="center" paddingTop="m">
                <Row gap="s">
                    <ElementType key="imprint" href="/imprint">Impressum</ElementType>
                    <ElementType key="privacy" href="/privacy">Datenschutzerklärung</ElementType>
                    <ElementType key="terms" href="/terms">AGB</ElementType>
                </Row>

                <Row gap="s" align="center" paddingTop="s">
                    <Logo href="/" wordmark size="xs" />
                    <Text variant="body-default-s" onBackground="accent-weak">
                        © 2023-2025 LM Beauty. Alle Rechte vorbehalten.
                    </Text>
                </Row>
            </Flex>
        </Column>
    );
};

export { Footer };
