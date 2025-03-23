'use client';

import { Column } from "@/once-ui/components";
import React, { useEffect } from "react";

export const ViewportLock = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const handleResize = () => {
            document.documentElement.style.width = '100vw';
            document.documentElement.style.height = '100vh';
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Column fillWidth style={{
            minWidth: '100vw',
            maxWidth: '100vw',
            overflowX: 'hidden'
        }}>
            {children}
        </Column>
    );
};