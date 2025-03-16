import {
    Button,
    Column,
    Row, SmartImage, SmartLink,

} from "@/once-ui/components";
import React from "react";

export const Footer = () => {
    return (
        <Column fillWidth paddingBottom="xl" horizontal="center">
            <Row maxWidth="xl" horizontal="space-between" gap="128" wrap paddingX="2">
                <Column gap="12" textVariant="label-default-m">
                    <Row paddingX="4" marginBottom="8">
                        Sonstiges
                    </Row>
                    <Row>
                        <SmartLink href=" ">Produkte</SmartLink>
                    </Row>
                    <Row>
                        <SmartLink href=" ">Preisliste</SmartLink>
                    </Row>
                </Column>
                <Column gap="12" textVariant="label-default-m">
                    <Row paddingX="4" marginBottom="8">
                        Rechtliches
                    </Row>
                    <Row>
                        <SmartLink href=" ">Über mich</SmartLink>
                    </Row>
                    <Row>
                        <SmartLink href=" ">Impressum</SmartLink>
                    </Row>
                    <Row>
                        <SmartLink href=" ">Datenschutz</SmartLink>
                    </Row>
                </Column>
                <Column data-border="rounded" gap="12" textVariant="label-default-m">
                    <Row paddingX="4" marginBottom="8">
                        Soziales
                    </Row>
                    <Button href=" " prefixIcon="whatsapp" label="WhatsApp" size="s" variant="secondary" />
                    <Button href=" " prefixIcon="mail" label="E-Mail" size="s" variant="secondary" />
                    <Button href=" " prefixIcon="instagram" label="Instagram" size="s" variant="secondary" />
                </Column>
            </Row>
        </Column>
    );
};
