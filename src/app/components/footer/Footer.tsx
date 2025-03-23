import {
    Button,
    Column, Flex, Icon,
    Row,
    SmartLink, Text,
} from "@/once-ui/components";

import React from "react";

import styles from "./Footer.module.scss"

export const Footer = () => {

    return (
        <Column
            fillWidth
            paddingY="xl"
            horizontal="center"
            background="neutral-weak"
        >
            <Flex
                maxWidth="xl"
                direction={"row"}
                horizontal={"center"}
                padding="xl"
                vertical={"start"}
                gap={"l"}
                className={styles.footerContainer}
                mobileDirection={"column"}
            >
                <Column
                    gap="xs"
                    textVariant="label-default-m"
                    horizontal="center"
                    marginBottom="xl"
                >
                    <Row as="h3" paddingX="4" marginBottom="xs">
                        Sonstiges
                    </Row>
                    <Row>
                        <SmartLink href="#pricelist">Preisliste</SmartLink>
                    </Row>
                </Column>

                <Column
                    gap="xs"
                    textVariant="label-default-m"
                    horizontal="center"
                    marginBottom="xl"
                >
                    <Row as="h3" paddingX="4" marginBottom="xs">
                        Rechtliches
                    </Row>
                    <Row>
                        <SmartLink href="#about">Über mich</SmartLink>
                    </Row>
                    <Row>
                        <SmartLink href="/">Impressum</SmartLink>
                    </Row>
                    <Row>
                        <SmartLink href="/">Datenschutz</SmartLink>
                    </Row>
                </Column>

                <Column
                    gap="xs"
                    textVariant="label-default-m"
                    horizontal="center"
                    marginBottom="xl"
                >
                    <Row as="h3" paddingX="4" marginBottom="xs">
                        Soziales
                    </Row>
                    <Button
                        href="#contact"
                        prefixIcon="whatsapp"
                        label="WhatsApp"
                        size="s"
                        variant="secondary"
                        fillWidth
                    />
                    <Button
                        href="#contact"
                        prefixIcon="mail"
                        label="E-Mail"
                        size="s"
                        variant="secondary"
                        fillWidth
                    />
                    <Button
                        href="#contact"
                        prefixIcon="instagram"
                        label="Instagram"
                        size="s"
                        variant="secondary"
                        fillWidth
                    />
                </Column>
            </Flex>
            <Flex fillWidth horizontal="center" vertical="center" direction="column" position={"absolute"} bottom="0">
                <Text
                    align="center"
                    variant="body-default-m"
                    onBackground="accent-weak"
                >
                    Made by
                    <SmartLink
                        style={{ paddingLeft: "4px"}}
                        href="https://instagram.com/jexcellence_"
                    >
                        JExcellence
                    </SmartLink>
                </Text>
                <Text
                    align="center"
                    variant="body-default-xs"
                    onBackground="accent-weak"
                >
                    unterstützt durch
                    <SmartLink
                        style={{ paddingLeft: "4px"}}
                        href="https://once-ui.com"
                        iconSize="s"
                    >
                        Once UI
                    </SmartLink>
                </Text>
            </Flex>
        </Column>
    );
};