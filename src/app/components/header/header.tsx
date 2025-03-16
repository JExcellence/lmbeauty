"use client";

import {
    Button,
    Column,
    Fade,
    Line,
    Logo,
    NavIcon,
    Option,
    Row,
    SmartLink,
    ToggleButton,
    UserMenu,
} from "@/once-ui/components";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderProps {
    authenticated?: boolean;
    avatar?: string;
    name?: string;
    subline?: string;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <Row zIndex={2} paddingX="8" paddingTop="8" fillWidth position="sticky" horizontal="center" top="0">
            <Fade
                fillWidth
                position="absolute"
                top="0"
                height={8}
                pattern={{ display: true, size: "2" }}
            />
            <Row
                as="header"
                border="neutral-alpha-weak"
                maxWidth="xl"
                paddingX="m"
                radius="l"
                height="64"
                vertical="center"
                position="relative"
                background="overlay"
            >
                <Row hide="s">
                    <Logo size="xl" href="/" />
                </Row>
                <Row show="s" gap="8" vertical="center" fillWidth>
                    <Logo size="xl" href="/" />
                </Row>
                <Row fillWidth vertical="center" horizontal="end">
                    <Row
                        hide="s"
                        textVariant="label-strong-s"
                        fillWidth
                        gap="24"
                        paddingX="l"
                        vertical="center"
                    >
                        <SmartLink href=" ">Über mich</SmartLink>
                        <SmartLink href=" ">Produkte</SmartLink>
                        <SmartLink href=" ">Schulungen</SmartLink>
                        <SmartLink href=" ">Preisliste</SmartLink>
                    </Row>
                    <Row fitWidth vertical="center" gap="8">
                        <Button size="s" variant="secondary" label="Anmelden" href="" />
                        <Button size="s" variant="primary" label="Registrieren" href="" />
                    </Row>
                </Row>
            </Row>
        </Row>
    );
};

export { Header };
