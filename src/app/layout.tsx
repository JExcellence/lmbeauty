import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import {Metadata, Viewport} from "next";

import { baseURL, style, meta, og, schema, social } from "@/once-ui/resources/config";
import { Column, Flex, ToastProvider, ThemeProvider } from "@/once-ui/components";

import {Inter, Lora, Playfair_Display } from 'next/font/google';
import React from "react";
import {ViewPortLock} from "@/app/components/viewport/ViewportLock";

const primary = Playfair_Display({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});

const secondary = Lora({
    variable: '--font-secondary',
    subsets: ['latin'],
    display: 'swap'
});

const tertiary = Lora({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
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
            card: "summary_large_image",
            title: og.title,
            description: og.description,
            images: [og.image],
        },
        icons: {
            icon: "/favicon.ico",
            apple: "/apple-touch-icon.png",
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

const schemaData = {
    "@context": "https://schema.org",
    "@type": schema.type,
    url: "https://" + baseURL,
    logo: schema.logo,
    name: schema.name,
    description: schema.description,
    email: schema.email,
    sameAs: Object.values(social).filter(Boolean),
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Flex
            suppressHydrationWarning={true}
            as="html"
            lang="de"
            fillHeight
            background="page"
            data-neutral={style.neutral}
            data-brand={style.brand}
            data-accent={style.accent}
            data-border={style.border}
            data-solid={style.solid}
            data-solid-style={style.solidStyle}
            data-surface={style.surface}
            data-transition={style.transition}
            data-scaling={style.scaling}
            className={classNames(
                primary.variable,
                tertiary.variable,
                secondary ? secondary.variable : "",
                tertiary ? tertiary.variable : "",
            )}
        >
            <head title={meta.title}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;
                  if (theme === 'system') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  } else {
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
                    }}
                />
                <title></title>
            </head>
            <ThemeProvider>
                <ToastProvider>
                    <Column as="body" fillWidth margin="0" padding="0" style={{ minHeight: "100vh" }}>
                        <ViewPortLock>
                            {children}
                        </ViewPortLock>
                    </Column>
                </ToastProvider>
            </ThemeProvider>
        </Flex>
    );
}