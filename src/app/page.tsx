"use client";

import {Background, Column, Flex, IconButton} from "@/once-ui/components";
import React, {useEffect, useRef} from "react";
import {Contact} from "@/app/components/contact/contact";
import {TestimonialCarousel} from "@/app/components/testimonial/testimonialcarousel";
import {About} from "@/app/components/aboutme/aboutme";
import {ProfileGallery} from "@/app/components/profilegallery/ProfileGallery";
import {Faq} from "@/app/components/faq/faq";
import {Footer} from "@/app/components/footer/Footer";
import {PriceList} from "@/app/components/pricelist/PriceList";

const testimonials = [
    {
        src: "/images/eins_zu_eins_1.jpg",
        title: "Lisa ist einfach unglaublich!",
        content: "Ich hatte kürzlich das Vergnügen, eine Wimpernverlängerung bei Lisa machen zu lassen und ich bin absolut begeistert! Lisa ist nicht nur unglaublich professionell, sondern auch sehr freundlich und aufmerksam. Sie hat sich die Zeit genommen, meine Wünsche und Bedenken zu verstehen, und das Ergebnis ist einfach fantastisch. Meine Wimpern sehen natürlich und gleichzeitig atemberaubend aus. Der gesamte Prozess war entspannt und angenehm, und ich fühlte mich die ganze Zeit über in guten Händen. Ich kann Lisas Service nur wärmstens empfehlen und werde definitiv wiederkommen!",
        name: "Justin E.",
        avatar: "/images/eins_zu_eins_1.jpg",
        company: "JExcellence",
        role: "Fachinformatiker"
    },
    {
        src: "/images/eins_zu_eins_2.jpg",
        title: "Lisa ist einfach unglaublich!",
        content: "Ich habe mir von Lisa ein Wimpernlifting machen lassen und bin rundum zufrieden! Sie ist sehr freundlich und zuvorkommend und das Ergebnis ihrer Arbeit ist hervorragend! Ich habe mich sehr wohl und gut beraten gefühlt!\n Ich komme auf jeden Fall wieder! Vielen Dank 😊 …",
        name: "Jana H.",
        avatar: "/images/eins_zu_eins_1.jpg",
        company: "",
        role: " "
    },
]

export default function Home() {
    return (
        <Column fillWidth center padding="s" maxWidth={60} gap="s">
            <Column center paddingY="xl" id="about" maxWidth={50} gap="s">
                <About />
            </Column>

            <Column center paddingY="xl" maxWidth={50} gap="s">
                <ProfileGallery />
            </Column>

            <Column zIndex={1} center paddingY="xl" maxWidth={50} id="testimonials">
                <TestimonialCarousel
                    testimonials={testimonials}
                    autoPlayInterval={3000}
                />
            </Column>

            <Column zIndex={1} center paddingY="xl" maxWidth={50} id="faq">
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
                            content: "Klar, deine Wimpern halten das aus! Aber danach bitte mit meinem speziellen Reinigungsshampoo säubern – so bleiben sie schön glänzend. 🏊♀️"
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
                            content: "Nein, solltest du nicht. Der Grund: Herkömmliche Mascara kann sich in den Zwischenräumen zwischen den Wimpern ansammeln, was zu einem ungleichmäßigen Look und einer verkürzten Haltbarkeit führen kann. 💄"
                        },
                        {
                            title: "Was erwartet mich beim ersten Termin?",
                            content: "Wir starten mit einem ausführlichen Beratungsgespräch über deinen Wunschlook. Dann:\n1. Bequemes Hinlegen\n2. Gründliche Reinigung und Entspannen\n3. Ich setze jede Wimper einzeln von Hand an\n4. Finaler Check und Pflegetipps von mir\nDu musst nur stillhalten – ich mache die Magie! ✨"
                        },
                        {
                            title: "Werden meine Naturwimpern auf langer Sicht geschädigt?",
                            content: "Keine Sorge! Wenn's professionell gemacht wird (und du nicht selbst rumzupfst), bleiben deine Naturwimpern topfit. Ich achte penibel darauf, dass nichts beschädigt wird. 👩⚕️"
                        },
                        {
                            title: "Was wenn mir der Look doch nicht gefällt?",
                            content: "Kommt vor! Dann komm einfach vorbei und wir probieren etwas neues aus. Sollte dir der Look gar nicht gefallen, dann löse ich alles schonend mit einem Spezialgel ab. Bitte probier das niemals selbst aus – ich mach das professionell für dich! ❌✂️"
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

            <Column zIndex={1} center paddingY="xl" maxWidth={50} id="pricelist">
                <PriceList
                    theme={{ color: "#9F7AEA", borderColor: "neutral-medium" }}
                    services={[
                        {
                            category: "Wimpernverlängerungen",
                            name: "Classic Extensions",
                            price: "89€",
                            duration: "120 Min",
                            description: "Natürlicher Look mit Einzelwimpern",
                            details: [
                                "Für dünne bis normale Wimpern",
                                "Hält 4-6 Wochen",
                                "Sanfte 0.15mm Technik",
                                "Inkl. Aftercare Kit"
                            ],
                            new: true
                        },
                        {
                            category: "Wimpernverlängerungen",
                            name: "Volume Extensions",
                            price: "129€",
                            duration: "150 Min",
                            description: "Volles Volumen mit Multi-Lash Effekt",
                            details: [
                                "2-6D Fächertechnik",
                                "Langanhaltender Halt",
                                "Individuelle Stärkeanpassung",
                                "Augenschonende Applikation"
                            ],
                            popular: true
                        },
                        {
                            category: "Zusatzleistungen",
                            name: "Wimpern-Tinting",
                            price: "39€",
                            duration: "30 Min",
                            description: "Natürliche Färbung der Eigenwimpern",
                            details: [
                                "In 4 Farbtönen verfügbar",
                                "Hält 4-6 Wochen",
                                "Ohne Ammoniak",
                                "Sofortiger Effekt"
                            ]
                        }
                    ]}
                />
            </Column>

            {/* Contact Section */}
            <Column center paddingY="xl" id="contact">
                <Contact />
            </Column>

            {/* Footer Section */}
            <Column center paddingY="xl" position={"relative"}>
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