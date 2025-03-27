import {
    Badge,
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
            paddingY="s"
            horizontal="center"
            background="neutral-weak"
        >
            <Flex
                maxWidth="xl"
                horizontal="center"
                vertical="space-evenly"
                mobileDirection={"column"}
                padding="s"
                gap="xl"
                className={styles.footerContainer}
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
                    vertical="center"
                    marginBottom="xl"
                >
                    <Row as="h3" paddingX="4" marginBottom="xs">
                        Soziales
                    </Row>
                    <Badge
                        center
                        width={10}
                        href="#contact"
                        icon="whatsapp"
                        title={"WhatsApp"}
                    />
                    <Badge
                        center
                        width={10}
                        href="#contact"
                        icon="mail"
                        title={"E-Mail"}
                    />
                    <Badge
                        center
                        width={10}
                        href="#contact"
                        icon="instagram"
                        title={"Instagram"}
                    />
                </Column>
            </Flex>
            <Flex
                fillWidth
                horizontal="center"
                vertical="center"
                direction="column"
                paddingY="xs"
            >
                <Text
                    align="center"
                    variant="body-default-m"
                    onBackground="accent-weak"
                    className={styles.footerText}
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