"use client";

import React from "react";
import {
	Column,
	Row,
	Heading,
	Text,
	Button,
	Avatar,
	RevealFx
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";
import Gallery from "@/components/gallery/Gallery";

export default function Home() {
	return (
		<Column fillWidth style={{ position: "relative" }}>
			{/* Moving Gallery as background */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: 1,
					overflow: "hidden",
				}}
			>
				<Gallery asBackground duration={30} />
			</div>
			
			{/* Main content overlay */}
			<Column
				maxWidth="m"
				gap="xl"
				horizontal="center"
				style={{ position: "relative", zIndex: 2 }}
			>
				<script
					type="application/ld+json"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebPage",
							name: home.title,
							description: home.description,
							url: `https://${baseURL}`,
							image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
							publisher: {
								"@type": "Person",
								name: person.name,
								image: {
									"@type": "ImageObject",
									url: `${baseURL}${person.avatar}`,
								},
							},
						}),
					}}
				/>
				
				<Column fillWidth paddingY="l" gap="m">
					<Column maxWidth="s">
						<RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
							<Heading wrap="balance" variant="display-strong-l">
								{home.headline}
							</Heading>
						</RevealFx>
						<RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
							<Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
								{home.subline}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4} horizontal="start">
							<Button
								id="about"
								data-border="rounded"
								href="/about"
								variant="secondary"
								size="m"
								arrowIcon
							>
								<Row gap="8" vertical="center">
									{about.avatar.display && (
										<Avatar
											style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
											src={person.avatar}
											size="m"
										/>
									)}
									{about.title}
								</Row>
							</Button>
						</RevealFx>
					</Column>
				</Column>
			</Column>
		</Column>
	);
}