"use client";

import {
    Logo,
    Row,
    UserMenu,
    Fade, IconButton, Button, NavIcon, Column, Banner, SmartLink,
} from "@/once-ui/components";
import React, {useEffect, useState} from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface HeaderProps {
    authenticated?: boolean;
    avatar?: string;
    name?: string;
    subline?: string;
}

const Header: React.FC<HeaderProps> = ({ authenticated, avatar, name, subline }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 50));

    useEffect(() => {
        const updateScrolled = () => {
            setScrolled(window.scrollY > 8);
        };

        window.addEventListener("scroll", updateScrolled);
        updateScrolled();

        return () => {
            window.removeEventListener("scroll", updateScrolled);
        };
    }, []);

    return (
        <>
            <Column
                zIndex={3}
                fillWidth
                position="sticky"
                top="0"
                left="0"
            >
                <Banner zIndex={4}>
                    Die Webseite befindet sich noch im Aufbau...
                </Banner>
                <Fade fillWidth position="absolute" top="0" height={3} pattern={{display: true, size: "1"}}/>

                {/* MOBILE */}
                <Row
                    as="header"
                    fillWidth
                    paddingY="xs"
                    paddingX="m"
                    position="absolute"
                    top="32"
                    left="0"
                    gap="m"
                    vertical="center"
                    horizontal="space-between"
                    show="s"
                    background="surface"
                >
                    <Logo href="/" size="xl"/>
                    <NavIcon
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        isActive={isMobileMenuOpen}
                        show="s"
                        zIndex={5}
                    />

                    {isMobileMenuOpen && (
                        <Column
                            fillWidth
                            position="absolute"
                            top="56"
                            left="0"
                            background="surface"
                            padding="l"
                            gap="l"
                            zIndex={3}
                        >
                            <Column gap="l" textVariant="body-strong-s" center>
                                <SmartLink key="about" href="#about" prefixIcon="person">
                                    Über mich
                                </SmartLink>
                                <SmartLink key="gallery" href="#gallery" prefixIcon="heart">
                                    Überzeuge dich selbst!
                                </SmartLink>
                                <SmartLink key="contact" href="#contact" prefixIcon="calendar">
                                    Termin buchen
                                </SmartLink>
                                <SmartLink key="pricelist" href="#pricelist" prefixIcon="docCurrencyEuro">
                                    Preisliste
                                </SmartLink>
                            </Column>

                            <Row gap="xl" center>
                                <IconButton
                                    icon="whatsapp"
                                    variant="tertiary"
                                    href="https://wa.me/+4915259675346?text=Hey%20Lisa%20%F0%9F%98%8A%20ich%20habe%20deine%20Webseite%20gesehen%20und%20habe%20Interesse%20an%20einem%20Termin."
                                />
                                <IconButton
                                    icon="instagram"
                                    variant="tertiary"
                                    href="https://www.instagram.com/_l.m_beauty_/"
                                />
                            </Row>

                            {authenticated && (
                                <>
                                    <Button
                                        size="s"
                                        label="Anmelden"
                                        variant="secondary"
                                        disabled={true}
                                        weight="default"
                                    />
                                    <UserMenu
                                        name={name}
                                        subline={subline}
                                        avatarProps={{ empty: !avatar, src: avatar }}
                                    />
                                </>
                            )}
                        </Column>
                    )}

                </Row>

                {/* TABLET */}
                <Row
                    as="header"
                    fillWidth
                    paddingY="xs"
                    paddingX="s"
                    position="absolute"
                    top="32"
                    left="0"
                    background="surface"
                    gap="s"
                    show="m"
                    hide="s"
                    vertical="center"
                    horizontal="space-between"
                >
                    <Row
                        gap="s"
                    >
                        <Logo href="/" size="xl"/>
                        <Row
                            fillWidth
                            vertical="center"
                        >
                            <Row
                                fitWidth
                                gap="s"
                                vertical="center"
                                textVariant="label-strong-s"
                            >
                                <SmartLink key="about" href="#about" prefixIcon="person">Über mich</SmartLink>
                                <SmartLink key="gallery" href="#gallery" prefixIcon="heart">Überzeuge dich selbst!</SmartLink>
                                <SmartLink key="contact" href="#contact" prefixIcon="calendar">Termin buchen</SmartLink>
                                <SmartLink key="pricelist" href="#pricelist" prefixIcon="docCurrencyEuro">Preisliste</SmartLink>
                            </Row>
                        </Row>
                    </Row>
                    <Row
                        gap="m"
                    >
                        <IconButton
                            icon="whatsapp"
                            variant="tertiary"
                            href="https://wa.me/+4915259675346?text=Hey%20Lisa%20%F0%9F%98%8A%20ich%20habe%20deine%20Webseite%20gesehen%20und%20habe%20Interesse%20an%20einem%20Termin."
                        />
                        <IconButton
                            icon="instagram"
                            variant="tertiary"
                            href="https://www.instagram.com/_l.m_beauty_/"
                        />
                        {authenticated && (
                            <Button
                                size="s"
                                label="Anmelden"
                                variant="secondary"
                                disabled={true}
                                weight="default"
                            />
                        )}

                        {authenticated && (
                            <UserMenu name={name} subline={subline} avatarProps={{empty: !avatar, src: avatar}}/>
                        )}
                    </Row>
                </Row>

                {/* DESKTOP */}
                <Row
                    as="header"
                    fillWidth
                    paddingY="xs"
                    paddingX="m"
                    position="absolute"
                    top="32"
                    left="0"
                    background="surface"
                    gap="m"
                    vertical="center"
                    horizontal="space-between"
                    hide="m"
                >
                    <Row
                        gap="m"
                    >
                        <Logo href="/" size="xl"/>
                        <Row
                            fillWidth
                            vertical="center"
                        >
                            <Row
                                fitWidth
                                gap="l"
                                vertical="center"
                                textVariant="label-strong-m"
                            >
                                <SmartLink key="about" href="#about" prefixIcon="person">Über mich</SmartLink>
                                <SmartLink key="gallery" href="#gallery" prefixIcon="heart">Überzeuge dich selbst!</SmartLink>
                                <SmartLink key="contact" href="#contact" prefixIcon="calendar">Termin buchen</SmartLink>
                                <SmartLink key="pricelist" href="#pricelist" prefixIcon="docCurrencyEuro">Preisliste</SmartLink>
                            </Row>
                        </Row>
                    </Row>
                    <Row
                        gap="m"
                    >
                        <IconButton
                            icon="whatsapp"
                            variant="tertiary"
                            href="https://wa.me/+4915259675346?text=Hey%20Lisa%20%F0%9F%98%8A%20ich%20habe%20deine%20Webseite%20gesehen%20und%20habe%20Interesse%20an%20einem%20Termin."
                        />
                        <IconButton
                            icon="instagram"
                            variant="tertiary"
                            href="https://www.instagram.com/_l.m_beauty_/"
                        />
                        {authenticated && (
                            <Button
                                size="s"
                                label="Anmelden"
                                variant="secondary"
                                disabled={true}
                                weight="default"
                            />
                        )}

                        {authenticated && (
                            <UserMenu name={name} subline={subline} avatarProps={{empty: !avatar, src: avatar}}/>
                        )}
                    </Row>
                </Row>
            </Column>
        </>
    )
}

Header.displayName = "Header";

export { Header };
