"use client";

import {Background, Column, Flex, IconButton} from "@/once-ui/components";
import { Header } from "@/app/components/header/header";
import {Hero} from "@/app/components/hero/hero";
import React, {useEffect, useRef} from "react";
import {Contact} from "@/app/components/contact/contact";
import {TestimonialCarousel} from "@/app/components/testimonial/testimonialcarousel";
import {About} from "@/app/components/aboutme/aboutme";
import {ProfileGallery} from "@/app/components/profilegallery/ProfileGallery";
import {CookieBanner} from "@/app/components/cookie/Cookie";
import {Faq} from "@/app/components/faq/faq";
import {Footer} from "@/app/components/footer/Footer";

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
        <Column fillWidth center padding="s" maxWidth={60} gap="s">
            {/* Hero Section */}
            <Column center padding="s" id="hero">
                <Hero fullscreen={true} />
            </Column>

            {/* About Section */}
            <Column center paddingY="xl" id="about" maxWidth={50} gap="s">
                <About />
            </Column>

            {/* Profile Gallery Section */}
            <Column center paddingY="xl" maxWidth={50} gap="s">
                <ProfileGallery />
            </Column>

            {/* Testimonials Section */}
            <Column center paddingY="xl" maxWidth={50} id="testimonials">
                <TestimonialCarousel
                    testimonials={testimonials}
                    autoPlayInterval={3000}
                />
            </Column>

            {/* FAQ Section */}
            <Column center paddingY="xl" maxWidth={50} id="faq">
                <Faq
                    title="Deine Fragen – meine Antworten"
                    description="Alles, was du über Wimpernverlängerungen wissen möchtest"
                    content={[
                        {
                            title: "Wie lange muss ich für mein neues Wimpern-Look einplanen?",
                            content: "Für dein perfektes Wimpern-Look nehme ich mir je nach gewünschtem Stil 1,5-2,5 Stunden Zeit. Ein Auffüllen geht schneller – da sind wir meist in 1-1,5 Stunden fertig. Perfect für die Mittagspause! 💫"
                        },
                        {
                            title: "Darf ich mit den Wimpern eigentlich schwimmen?",
                            content: "Klar, deine Wimpern halten das aus! Aber danach bitte mit meinem speziellen Reinigungsshampoo säubern – so bleiben sie schön glänzend und Chlor/Salz macht ihnen nichts aus. 🏊♀️"
                        },
                        {
                            title: "Wie halte ich meine Wimpern richtig schön?",
                            content: "Ganz easy: \n- Keine öligen Produkte drumherum\n- Sanft mit der Wimpernbürste kämmen\n- Nicht knibbeln oder ziehen (ich weiß, manchmal schwer 😉)\n- Am besten auf dem Rücken schlafen\n- Alle 2-3 Wochen zum Auffüllen vorbeikommen"
                        },
                        {
                            title: "Vertragen das auch sensible Augen?",
                            content: "Absolut! Ich arbeite nur mit hautverträglichen Materialien. Wenn du empfindlich bist, machen wir vorher einen Mini-Test. Dein Comfort steht immer an erster Stelle! 🤗"
                        },
                        {
                            title: "Kann ich trotzdem Mascara benutzen?",
                            content: "Ehrlich? Eigentlich brauchst du keine mehr! Aber falls doch: Nimm bitte nur meine spezielle wasserbasierte Tusche – die schadet den Wimpern nicht. 💄"
                        },
                        {
                            title: "Was erwartet mich beim ersten Termin?",
                            content: "Wir starten mit einem ausführlichen Beratungsgespräch über deinen Wunschlook. Dann:\n1. Gründliche Reinigung\n2. Bequemes Hinlegen und Entspannen\n3. Ich setze jede Wimper einzeln von Hand an\n4. Finaler Check und Pflegetipps von mir\nDu musst nur stillhalten – ich mache die Magie! ✨"
                        },
                        {
                            title: "Geht das auf Dauer nicht auf meine eigenen Wimpern?",
                            content: "Keine Sorge! Wenn's professionell gemacht wird (und du nicht selbst rumzupfst), bleiben deine Naturwimpern topfit. Ich achte penibel darauf, dass nichts beschädigt wird. 👩⚕️"
                        },
                        {
                            title: "Was wenn mir der Look doch nicht gefällt?",
                            content: "Kommt vor! Dann komm einfach vorbei und ich löse alles schonend mit einem Spezialgel. Bitte probier das niemals selbst aus – ich mach das professionell für dich! ❌✂️"
                        },
                        {
                            title: "Wie bereite ich mich am besten vor?",
                            content: "Ganz einfach:\n- Komm ohne Augen-Make-up\n- Nimm Kontaktlinsen raus\n- Trink vorher keinen Kaffee (zappelige Augen sind tricky)\n- Keine fetthaltige Creme um die Augen\nDer Rest ist mein Job! ☕➡️🚫"
                        },
                        {
                            title: "Und wenn's doch mal juckt oder spannt?",
                            content: "Sofort Bescheid sagen! Wir brechen sofort ab und klären alles. Bei späteren Reaktionen: Ruf sofort an – ich bin 24/7 für Notfälle erreichbar! 🚨📱"
                        }
                    ]}
                />
            </Column>

            {/* Contact Section */}
            <Column center paddingY="xl" id="contact">
                <Contact />
            </Column>

            {/* Footer Section */}
            <Column center paddingY="xl">
                <Footer />
            </Column>

            {/* Scroll to Top Button */}
            <IconButton
                icon="chevronUp"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                variant="primary"
                size="l"
                style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    position: "fixed",
                    bottom: "80px",
                    right: "20px",
                    zIndex: "1000"
                }}
            />
        </Column>
    );
}