import React, { useState, useEffect, HTMLAttributes } from "react";
import { Column, Text } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery as galleryContent } from "@/app/resources/content";

interface ImageRequireContext {
	keys(): string[];
	<T = any>(key: string): T;
}

const importAllImages = (
	requireContext: ImageRequireContext,
	regex?: RegExp
): string[] => {
	let keys = requireContext.keys();
	if (regex) {
		keys = keys.filter((key) => regex.test(key));
	}
	return keys.map((key) => requireContext<string>(key));
};

export interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
	folderPath?: string;
	regex?: RegExp;
	fallbackImages?: string[];
	duration?: number;
	asBackground?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({
																					 folderPath = "@/gallery/images",
																					 regex = /\.(png|jpe?g|svg|gif)$/,
																					 fallbackImages,
																					 duration = 300,
																					 asBackground = false,
																					 ...rest
																				 }) => {
	const [images, setImages] = useState<string[]>([]);
	const [, setUseContentData] = useState(false);
	
	useEffect(() => {
		try {
			const context = (require as any).context(folderPath) as ImageRequireContext;
			const importedImages = importAllImages(context, regex);
			if (importedImages.length > 0) {
				setImages(importedImages);
			} else if (fallbackImages && fallbackImages.length > 0) {
				setImages(fallbackImages);
			} else if (galleryContent?.images) {
				const contentImages = galleryContent.images.map((img) => img.src);
				setImages(contentImages);
				setUseContentData(true);
			}
		} catch (error) {
			console.error("Error loading images from folder. Falling back.", error);
			if (fallbackImages && fallbackImages.length > 0) {
				setImages(fallbackImages);
			} else if (galleryContent?.images) {
				const contentImages = galleryContent.images.map((img) => img.src);
				setImages(contentImages);
				setUseContentData(true);
			}
		}
	}, [folderPath, regex, fallbackImages]);
	
	if (images.length === 0) {
		return (
			<Column content="center" align="center" padding="xl" {...rest}>
				<Text>No images available.</Text>
			</Column>
		);
	}
	
	const sliderImages = [...images, ...images];
	
	const galleryContentJSX = (
		<div className={styles.slider} {...rest}>
			<div
				className={styles.sliderTrack}
				style={{ width: `${sliderImages.length * 100}%`, animationDuration: `${duration}s` }}
			>
				{sliderImages.map((src, index) => (
					<div
						key={index}
						className={styles.sliderItem}
						style={{
							width: `${100 / sliderImages.length}%`,
							backgroundImage: `url(${src})`,
						}}
					/>
				))}
			</div>
		</div>
	);
	
	if (asBackground) {
		return (
			<div
				style={{
					position: "relative",
					top: 0,
					left: 0,
					width: "100%",
					zIndex: 0,
					overflow: "hidden",
				}}
			>
				{galleryContentJSX}
			</div>
		);
	}
	
	return galleryContentJSX;
};

export default Gallery;