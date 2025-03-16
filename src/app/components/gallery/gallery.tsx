"use client";

import React, { useEffect, useState, useRef } from "react";
import { Flex, RevealFx, SmartImage } from "@/once-ui/components";
import styles from "./gallery.module.scss";

interface ImageGalleryProps {
    images: {
        src: string;
        alt: string;
    }[];
    autoPlayInterval?: number;
    aspectRatio?: string;
    sizes?: string;
    clickable?: boolean;
    position?: "center" | "start" | "end";
    slideAnimation?: boolean;
    height?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
                                                       images = [],
                                                       autoPlayInterval = 5000,
                                                       sizes = "100vw",
                                                       clickable = true,
                                                       position = "center",
                                                       slideAnimation = false,
                                                       height = "200px",
                                                   }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const autoPlayTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const transitionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const nextImageRef = useRef<HTMLImageElement | null>(null);

    const preloadNextImage = (nextIndex: number) => {
        if (nextIndex >= 0 && nextIndex < images.length) {
            nextImageRef.current = new Image();
            nextImageRef.current.src = images[nextIndex].src;
        }
    };

    const handleNavigate = (nextIndex: number) => {
        if (nextIndex !== activeIndex && !transitionTimeoutRef.current) {
            if (autoPlayTimeoutRef.current) {
                clearTimeout(autoPlayTimeoutRef.current);
            }

            preloadNextImage(nextIndex);
            setIsTransitioning(false);

            transitionTimeoutRef.current = setTimeout(() => {
                setActiveIndex(nextIndex);

                setTimeout(() => {
                    setIsTransitioning(true);
                    transitionTimeoutRef.current = undefined;

                    startAutoPlay();
                }, 300);
            }, 800);
        }
    };

    const handleImageClick = () => {
        if (clickable && images.length > 1) {
            const nextIndex = (activeIndex + 1) % images.length;
            handleNavigate(nextIndex);
        }
    };

    const startAutoPlay = () => {
        if (images.length > 1 && !slideAnimation) {
            autoPlayTimeoutRef.current = setTimeout(() => {
                const nextIndex = (activeIndex + 1) % images.length;

                preloadNextImage(nextIndex);
                setIsTransitioning(false);

                transitionTimeoutRef.current = setTimeout(() => {
                    setActiveIndex(nextIndex);

                    setTimeout(() => {
                        setIsTransitioning(true);
                        transitionTimeoutRef.current = undefined;
                        startAutoPlay();
                    }, 300);
                }, 800);
            }, autoPlayInterval);
        }
    };

    useEffect(() => {
        if (!slideAnimation) {
            startAutoPlay();
        }

        return () => {
            if (autoPlayTimeoutRef.current) {
                clearTimeout(autoPlayTimeoutRef.current);
            }
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        };
    }, [activeIndex, images.length, slideAnimation]);

    if (images.length === 0) {
        return null;
    }

    return (
        <Flex
            fillWidth
            gap="12"
            direction="column"
            vertical={position}
            className={slideAnimation ? styles.galleryContainer : ""}
            style={{ marginTop: 0 }} // Ensure it's at the top
        >
            {slideAnimation ? (
                <div className={styles.slideContainer} style={{ height }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={styles.slideItem}
                            style={{
                                cursor: clickable ? "pointer" : "default",
                            }}
                            onClick={clickable ? handleImageClick : undefined}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ height }}>
                    <RevealFx
                        onClick={clickable ? handleImageClick : undefined}
                        fillWidth
                        trigger={isTransitioning}
                        translateY="16"
                        speed="fast"
                        style={{ height: "100%" }}
                    >
                        <SmartImage
                            sizes={sizes}
                            priority
                            radius="l"
                            border="neutral-alpha-weak"
                            alt={images[activeIndex]?.alt}
                            src={images[activeIndex]?.src}
                            style={{
                                cursor: clickable && images.length > 1 ? "pointer" : "default",
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </RevealFx>
                </div>
            )}

            {!slideAnimation && images.length > 1 && (
                <Flex gap="4" paddingX="s" fillWidth horizontal="center">
                    {images.map((_, index) => (
                        <Flex
                            key={index}
                            onClick={() => handleNavigate(index)}
                            style={{
                                background:
                                    activeIndex === index
                                        ? "var(--neutral-on-background-strong)"
                                        : "var(--neutral-alpha-medium)",
                                transition: "background 0.3s ease",
                                cursor: clickable ? "pointer" : "default",
                            }}
                            cursor={clickable ? "interactive" : "default"}
                            fillWidth
                            height="2"
                        ></Flex>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

export default ImageGallery;