import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import {Metadata, Viewport} from "next";

import { baseURL, style, meta, og, schema, social } from "@/once-ui/resources/config";
import {Background, Column, Flex, ToastProvider} from "@/once-ui/components";

import {Lora, Roboto_Mono} from 'next/font/google';
import { Montserrat } from 'next/font/google';
import React from "react";
import {CookieBanner} from "@/app/components/cookie/Cookie";
import {Header} from "@/app/components/header/Header";
import {Hero} from "@/app/components/hero/hero";
import {ViewportLock} from "@/app/components/viewport/ViewportLock";

const primary = Lora({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});

const secondary = Montserrat({
    variable: '--font-secondary',
    subsets: ['latin'],
    display: 'swap'
});

const tertiary = Lora({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});

const code = Roboto_Mono({
    variable: "--font-code",
    subsets: ["latin"],
    display: "swap",
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'auto',
    interactiveWidget: 'resizes-content',
    themeColor: '#FDA4AF',
};


export async function generateMetadata(): Promise<Metadata> {
    const metadataBase = new URL(`https://lmbeauty.de}`)

    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: og.title,
            description: og.description,
            url: "https://" + baseURL,
            siteName: "LM Beauty in Oldenburg",
            locale: "de_DE",
            images: [
                {
                    url: og.image,
                    alt: og.title,
                },
            ],
            type: og.type as
                | "website"
                | "article"
                | "book"
                | "profile"
                | "music.song"
                | "music.album"
                | "music.playlist"
                | "music.radio_station"
                | "video.movie"
                | "video.episode"
                | "video.tv_show"
                | "video.other",
        },
        twitter: {
            card: 'summary_large_image',
            title: og.title,
            description: og.description,
            images: [og.image],
        },
        icons: {
            icon: '/favicon.ico',
            apple: '/apple-touch-icon.png',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": 1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        metadataBase,
    };
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Flex
            as="html"
            lang="de"
            background="page"
            data-neutral={style.neutral}
            data-brand={style.brand}
            data-accent={style.accent}
            data-border={style.border}
            data-theme={style.theme}
            data-solid={style.solid}
            data-solid-style={style.solidStyle}
            data-surface={style.surface}
            data-transition={style.transition}
            data-scaling={style.scaling}
            className={classNames(
                primary.variable,
                code.variable,
                secondary ? secondary.variable : "",
                tertiary ? tertiary.variable : "",
            )}
        >
            <ToastProvider>
                <Column as="body" fillWidth margin="0" padding="0">
                    <Header />
                    <Hero fullscreen={true}/>
                    <Flex
                        position="relative"
                        zIndex={0}
                        fillWidth
                        paddingY="l"
                        paddingX="l"
                        horizontal="center"
                        flex={0}
                    >
                        <Flex horizontal="center" fillWidth minHeight="0">
                            <ViewportLock>
                                {children}
                            </ViewportLock>
                        </Flex>
                    </Flex>
                </Column>
            </ToastProvider>
            <CookieBanner/>
        </Flex>
    );
}