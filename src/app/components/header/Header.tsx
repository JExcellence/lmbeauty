"use client";

import {
    Column,
    Fade,
    Logo,
    NavIcon,
    Row,
    SmartLink,
    Text,
} from "@/once-ui/components";

import React, { useEffect, useState } from "react";
import styles from './Header.module.scss';

interface HeaderProps {
    authenticated?: boolean;
    avatar?: string;
    name?: string;
    subline?: string;
}

const NAV_ITEMS = [
    { id: 'about', label: 'Über mich', icon: 'person' },
    { id: 'showcase', label: 'Showcase', icon: 'heart' },
    { id: 'contact', label: 'Termin buchen', icon: 'calendar' },
    { id: 'pricelist', label: 'Preisliste', icon: 'docCurrencyEuro' },
];

const Header: React.FC<HeaderProps> = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            const headerHeight = document.querySelector('header')?.clientHeight || 0;
            const offset = headerHeight + 24;

            window.scrollTo({
                top: section.offsetTop - offset,
                behavior: 'smooth'
            });

            setActiveSection(id);
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <Row
            zIndex={3}
            paddingX="8"
            paddingTop="8"
            fillWidth
            position="sticky"
            horizontal="center"
            top="0"
            className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        >
            <Fade
                fillWidth
                position="absolute"
                top="0"
                height={8}
                pattern={{ display: true, size: "1" }}
            />
            <Row
                as="header"
                border="neutral-alpha-weak"
                maxWidth="xl"
                paddingX="m"
                radius="l"
                height="56"
                vertical="center"
                position="relative"
                background="overlay"
                className={styles.headerInner}
            >
                <Row show="s" gap="8" fillWidth vertical="center" horizontal="space-between">
                    <Row>
                        <Logo size="xl" href="/" className={styles.logo}/>
                    </Row>
                    <Row>
                        <NavIcon
                            isActive={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Mobile Menu"
                            className={styles.menuToggle}
                        />
                    </Row>
                </Row>

                <Row hide="s" fillWidth vertical="center" horizontal="end">
                    <Logo size="xl" href="/" className={styles.logo}/>
                    <Row
                        textVariant="label-strong-s"
                        fillWidth
                        gap="24"
                        paddingX="l"
                        vertical="center"
                        className={styles.navContainer}
                    >
                        {NAV_ITEMS.map((item) => (
                            <SmartLink
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleScroll(item.id, e)}
                                prefixIcon={item.icon}
                                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                            >
                                <Text className={styles.navText}>{item.label}</Text>
                            </SmartLink>
                        ))}
                    </Row>
                </Row>

                {isMobileMenuOpen && (
                    <Column
                        show="s"
                        position="absolute"
                        top="64"
                        left="0"
                        fillWidth
                        background="overlay"
                        border="neutral-alpha-weak"
                        radius="l"
                        padding="l"
                        gap="l"
                        className={styles.mobileMenu}
                    >
                        {NAV_ITEMS.map((item) => (
                            <SmartLink
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleScroll(item.id, e)}
                                prefixIcon={item.icon}
                                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                            >
                                <Text className={styles.navText}>{item.label}</Text>
                            </SmartLink>
                        ))}
                    </Column>
                )}
            </Row>
        </Row>
    );
};

export { Header };