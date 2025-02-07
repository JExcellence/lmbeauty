"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, home, about, blog, work, gallery } from "@/app/resources/content";

type TimeDisplayProps = {
	timeZone: string;
	locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "de-DE" }) => {
	const [currentTime, setCurrentTime] = useState("");
	
	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const options: Intl.DateTimeFormatOptions = {
				timeZone,
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
			};
			const timeString = new Intl.DateTimeFormat(locale, options).format(now);
			setCurrentTime(timeString);
		};
		
		updateTime();
		const intervalId = setInterval(updateTime, 1000);
		
		return () => clearInterval(intervalId);
	}, [timeZone, locale]);
	
	return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
	const pathname = usePathname() ?? "";
	
	return (
		<>
			<Fade hide="s" fillWidth position="fixed" height="80" zIndex={9}/>
			<Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9}/>
			<Flex
				fitHeight
				className={styles.position}
				as="header"
				zIndex={9}
				fillWidth
				padding="8"
				horizontal="center"
				vertical="center"
				position="absolute"
			>
				<Flex fillWidth horizontal="center">
					<Flex
						background="surface"
						border="neutral-medium"
						radius="m-4"
						shadow="l"
						padding="4"
						horizontal="center"
					>
						<Flex gap="4" vertical="center" textVariant="body-default-s">
							{routes["/"] && (
								<ToggleButton prefixIcon="home" href="/" selected={pathname === "/"}/>
							)}
							<Line vert maxHeight="24"/>
							{routes["/about"] && (
								<>
									<ToggleButton
										className="s-flex-hide"
										prefixIcon="person"
										href="/about"
										label={about.label}
										selected={pathname === "/about"}
									/>
									<ToggleButton
										className="s-flex-show"
										prefixIcon="person"
										href="/about"
										selected={pathname === "/about"}
									/>
								</>
							)}
							{routes["/gallery"] && (
								<>
									<ToggleButton
										className="s-flex-hide"
										prefixIcon="gallery"
										href="/gallery"
										label={gallery.label}
										selected={pathname.startsWith("/gallery")}
									/>
									<ToggleButton
										className="s-flex-show"
										prefixIcon="gallery"
										href="/gallery"
										selected={pathname.startsWith("/gallery")}
									/>
								</>
							)}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};