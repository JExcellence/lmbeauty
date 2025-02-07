import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style } from "@/app/resources";

import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { person, home } from "@/app/resources/content";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";
import { Raleway } from 'next/font/google';
import { Sora } from 'next/font/google';
import React from "react";

export async function generateMetadata() {
	return {
		metadataBase: new URL(`https://${baseURL}`),
		title: home.title,
		description: home.description,
		openGraph: {
			title: `LM Beauty | Wimpern & Nägel in Oldenburg`,
			description: "Meine Webseite für alles rund um Wimpern und Nägel",
			url: baseURL,
			siteName: `LM Beauty | Wimpern & Nägel in Oldenburg`,
			locale: "de_DE",
			type: "website",
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

type FontConfig = {
	variable: string;
};

import { Arvo } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

const primary = Arvo({
	variable: '--font-primary',
	subsets: ['latin'],
	weight: '700',
	display: 'swap'
});

const secondary = Playfair_Display({
	variable: '--font-secondary',
	subsets: ['latin'],
	display: 'swap'
});

const tertiary = Cormorant_Garamond({
	variable: '--font-tertiary',
	subsets: ['latin'],
	weight: '600',
	display: 'swap'
});



const code = Source_Code_Pro({
	variable: "--font-code",
	subsets: ["latin"],
	display: "swap",
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<Flex
			as="html"
			lang="de"
			background="page"
			data-neutral={style.neutral}
			data-brand={style.brand}
			data-accent={style.accent}
			data-solid={style.solid}
			data-solid-style={style.solidStyle}
			data-theme={style.theme}
			data-border={style.border}
			data-surface={style.surface}
			data-transition={style.transition}
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : "",
				tertiary ? tertiary.variable : "",
				code.variable,
			)}
		>
			<ToastProvider>
				<Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
					<Background
						mask={{
							cursor: effects.mask.cursor,
							x: effects.mask.x,
							y: effects.mask.y,
							radius: effects.mask.radius,
						}}
						gradient={{
							display: effects.gradient.display,
							x: effects.gradient.x,
							y: effects.gradient.y,
							width: effects.gradient.width,
							height: effects.gradient.height,
							tilt: effects.gradient.tilt,
							colorStart: effects.gradient.colorStart,
							colorEnd: effects.gradient.colorEnd,
							opacity: effects.gradient.opacity as
								| 0
								| 10
								| 20
								| 30
								| 40
								| 50
								| 60
								| 70
								| 80
								| 90
								| 100,
						}}
						dots={{
							display: effects.dots.display,
							color: effects.dots.color,
							size: effects.dots.size as any,
							opacity: effects.dots.opacity as any,
						}}
						grid={{
							display: effects.grid.display,
							color: effects.grid.color,
							width: effects.grid.width as any,
							height: effects.grid.height as any,
							opacity: effects.grid.opacity as any,
						}}
						lines={{
							display: effects.lines.display,
							opacity: effects.lines.opacity as any,
						}}
					/>
					<Header/>
					<Flex>
						<RouteGuard>{children}</RouteGuard>
					</Flex>
					<Footer />
				</Column>
			</ToastProvider>
		</Flex>
	);
}
