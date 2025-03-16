"use client";

import {Column, Flex} from "@/once-ui/components";
import { Header } from "@/app/components/header/header";
import {Hero} from "@/app/components/hero/hero";
import React from "react";
import {Contact} from "@/app/components/contact/contact";
import {TestimonialCarousel} from "@/app/components/testimonial/testimonialcarousel";
import {About} from "@/app/components/aboutme/aboutme";
import {ProfileGallery} from "@/app/components/profilegallery/ProfileGallery";
import {Cookie} from "next/dist/compiled/@next/font/dist/google";
import {CookieBanner} from "@/app/components/cookie/Cookie";

const testimonials = [
    {
        src: "/images/eins_zu_eins_1.jpg",
        title: "Lisa ist einfach unglaublich!",
        content: "Ich bin jedes Mal begeistert von meinen Wimpern – sie halten super lange und sehen wunderschön aus. Die Gespräche während des Termins machen es zu einem echten Highlight meines Tages. Danke für die tolle Arbeit, Lisa!",
        name: "Julia S.",
        avatar: "/images/eins_zu_eins_1.jpg",
        company: "test comp",
        role: "designer"
    },
    {
        src: "/images/eins_zu_eins_2.jpg",
        title: "Lisa ist einfach unglaublich!",
        content: "Ich bin jedes Mal begeistert von meinen Wimpern – sie halten super lange und sehen wunderschön aus. Die Gespräche während des Termins machen es zu einem echten Highlight meines Tages. Danke für die tolle Arbeit, Lisa!",
        name: "Julia S.",
        avatar: "/images/eins_zu_eins_1.jpg",
        company: "test comp",
        role: "designer"
    },
    {
        src: "/images/eins_zu_eins_3.jpg",
        title: "Lisa ist einfach unglaublich!",
        content: "Ich bin jedes Mal begeistert von meinen Wimpern – sie halten super lange und sehen wunderschön aus. Die Gespräche während des Termins machen es zu einem echten Highlight meines Tages. Danke für die tolle Arbeit, Lisa!",
        name: "Julia S.",
        avatar: "/images/eins_zu_eins_1.jpg",
        company: "test comp",
        role: "designer"
    },
    {
        src: "/images/eins_zu_eins_1.jpg",
        title: "Lisa ist einfach unglaublich!",
        content: "Ich bin jedes Mal begeistert von meinen Wimpern – sie halten super lange und sehen wunderschön aus. Die Gespräche während des Termins machen es zu einem echten Highlight meines Tages. Danke für die tolle Arbeit, Lisa!",
        name: "Julia S.",
        avatar: "/images/eins_zu_eins_1.jpg",
        company: "test comp",
        role: "designer"
    },
]

export default function Home() {
    return (
        <Column fillWidth center>
            <Header/>
            <Column center maxWidth={60}>
                <Column>
                    <Hero fullscreen={true}/>
                </Column>
                <Column fillWidth maxWidth={40}>
                    <About/>
                </Column>
                <Column fillWidth maxWidth={100}>
                    <ProfileGallery />
                </Column>
                <Column maxWidth={40} paddingY="xl">
                    <Flex fillWidth horizontal="center" paddingX="24">
                        <TestimonialCarousel
                            testimonials={testimonials}
                            autoPlayInterval={3000}
                        />
                    </Flex>
                </Column>
                <Column>
                    <Contact/>
                </Column>
            </Column>
            <CookieBanner/>
        </Column>
    );
}