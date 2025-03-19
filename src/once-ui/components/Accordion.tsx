"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { Flex, Icon, Heading, Column } from ".";
import styles from "./Accordion.module.scss";

interface AccordionProps extends Omit<React.ComponentProps<typeof Flex>, "title"> {
    title: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = forwardRef(
    ({ title, children, isOpen = false, onToggle, ...rest }, ref) => {

        const toggleAccordion = () => {
            onToggle?.();
        };

        useImperativeHandle(ref, () => ({
            ...((ref as React.MutableRefObject<HTMLDivElement>)?.current ?? {}),
            toggle: toggleAccordion,
            open: () => onToggle?.(),
            close: () => onToggle?.(),
        }));

        return (
            <Flex fillWidth direction="column" className={styles.border}>
                <Flex
                    tabIndex={0}
                    className={styles.accordion}
                    cursor="pointer"
                    transition="macro-medium"
                    paddingY="16"
                    paddingX="20"
                    vertical="center"
                    horizontal="space-between"
                    onClick={toggleAccordion}
                    aria-expanded={isOpen}
                    aria-controls="accordion-content"
                >
                    <Heading as="h3" variant="heading-strong-s">
                        {title}
                    </Heading>
                    <Icon
                        name="chevronDown"
                        size="m"
                        style={{
                            display: "flex",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "var(--transition-micro-medium)",
                        }}
                    />
                </Flex>
                <Flex
                    id="accordion-content"
                    fillWidth
                    style={{
                        display: "grid",
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        transition:
                            "grid-template-rows var(--transition-duration-macro-medium) var(--transition-eased)",
                    }}
                    aria-hidden={!isOpen}
                >
                    <Flex fillWidth minHeight={0} overflow="hidden">
                        <Column fillWidth paddingX="20" paddingTop="8" paddingBottom="16" {...rest}>
                            {children}
                        </Column>
                    </Flex>
                </Flex>
            </Flex>
        );
    },
);

Accordion.displayName = "Accordion";
export { Accordion };