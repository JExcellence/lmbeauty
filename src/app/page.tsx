"use client";

import {Column, Heading, Text} from "@/once-ui/components";
import React from "react";
import {Contact} from "@/app/components/contact/contact";
import {TestimonialCarousel} from "@/app/components/testimonial/testimonialcarousel";
import {About} from "@/app/components/aboutme/AboutMe";
import {ProfileGallery} from "@/app/components/profilegallery/ProfileGallery";
import {Faq} from "@/app/components/faq/faq";
import {Footer} from "@/app/components/footer/Footer";
import {PriceList} from "@/app/components/pricelist/PriceList";
import {ScrollToTopButton} from "@/once-ui/components/ScrollToTopButton";

const testimonials = [
    {
        src: "/images/work/wimpernlifting/eye/wimpernlifting_1.jpg",
        title: "Ich bin begeistert!",
        content: "Ich hatte kürzlich das Vergnügen, eine Wimpernverlängerung bei Lisa machen zu lassen und ich bin absolut begeistert! Lisa ist nicht nur unglaublich professionell, sondern auch sehr freundlich und aufmerksam. Sie hat sich die Zeit genommen, meine Wünsche und Bedenken zu verstehen, und das Ergebnis ist einfach fantastisch. Meine Wimpern sehen natürlich und gleichzeitig atemberaubend aus. Der gesamte Prozess war entspannt und angenehm, und ich fühlte mich die ganze Zeit über in guten Händen. Ich kann Lisas Service nur wärmstens empfehlen und werde definitiv wiederkommen!",
        name: "Justin E.",
        avatar: "/images/work/wimpernlifting/eye/wimpernlifting_1.jpg",
        company: "JExcellence",
        role: "Fachinformatiker"
    },
    {
        src: "/images/work/wimpernlifting/eye/wimpernlifting_2.jpg",
        title: "Lisa ist einfach unglaublich!",
        content: "Ich habe mir von Lisa ein Wimpernlifting machen lassen und bin rundum zufrieden! Sie ist sehr freundlich und zuvorkommend und das Ergebnis ihrer Arbeit ist hervorragend! Ich habe mich sehr wohl und gut beraten gefühlt!\n Ich komme auf jeden Fall wieder! Vielen Dank 😊 …",
        name: "Jana H.",
        avatar: "/images/work/wimpernlifting/eye/wimpernlifting_2.jpg",
        company: "",
        role: " "
    },
]

export default function Home() {
    return (
        <Column fillWidth center padding="s" gap="s">
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
                <Heading as="h2" variant="display-strong-xs" align="center">Preisliste</Heading>
                <Text align="center" wrap="balance" variant="body-default-l" onBackground="neutral-medium" marginBottom="20">
                    Hier findest du meine aktuellen Preise 🌸
                </Text>
                <PriceList
                    services={[
                        {
                            name: "Wimpern",
                            children: [
                                {
                                    name: "1:1 Technik",
                                    description: "Bei der 1:1 Technik wird auf jede Naturwimper eine einzelne Wimper geklebt. Somit wird ein sehr natürliches Ergebnis erzielt.",
                                    children: [
                                        {
                                            name: "Neumodellage",
                                            price: "75€",
                                            description: "Neue Anlage"
                                        },
                                        {
                                            name: "~ 2 Wochen",
                                            price: "25€",
                                            description: "Auffüllen bis zur 2. Woche"
                                        },
                                        {
                                            name: "~ 3 Wochen",
                                            price: "30€",
                                            description: "Auffüllen bis zur 3. Woche"
                                        },
                                        {
                                            name: "~ 4 Wochen",
                                            price: "35€",
                                            description: "Auffüllen bis zur 4. Woche"
                                        }
                                    ]
                                },
                                {
                                    name: "Hybrid Technik",
                                    description: "Bei der Hybrid Technik werden abwechselnd Volumenfächer und Einzelwimpern auf die Naturwimpern geklebt. Die Hybrid Technik ist gut geeignet, um mit den Extensions zu starten, für alle die noch unsicher sind wie intensiv das Ergebnis werden soll.",
                                    children: [
                                        {
                                            name: "Neumodellage",
                                            price: "85€",
                                            description: "Neue Anlage"
                                        },
                                        {
                                            name: "~ 2 Wochen",
                                            price: "35€",
                                            description: "Auffüllen bis zur 2. Woche"
                                        },
                                        {
                                            name: "~ 3 Wochen",
                                            price: "40€",
                                            description: "Auffüllen bis zur 3. Woche"
                                        },
                                        {
                                            name: "~ 4 Wochen",
                                            price: "45€",
                                            description: "Auffüllen bis zur 4. Woche"
                                        }
                                    ]
                                },
                                {
                                    name: "Volumen Technik",
                                    description: "Bei der Volumen Technik wird auf eine einzelne Naturwimper ein handgemachter Fächer gesetzt. Je nach Kundenwunsch und Gegebenheiten kann das Ergebnis von einem leichten Volumen bis zu einem Mega Volumen gearbeitet werden.",
                                    children: [
                                        {
                                            name: "Neumodellage",
                                            price: "110€",
                                            description: "Neue Anlage"
                                        },
                                        {
                                            name: "~ 2 Wochen",
                                            price: "45€",
                                            description: "Auffüllen bis zur 2. Woche"
                                        },
                                        {
                                            name: "~ 3 Wochen",
                                            price: "50€",
                                            description: "Auffüllen bis zur 3. Woche"
                                        },
                                        {
                                            name: "~ 4 Wochen",
                                            price: "55€",
                                            description: "Auffüllen bis zur 4. Woche"
                                        }
                                    ]
                                },
                                {
                                    name: "Liftings",
                                    description: "Beim Augenbrauen- als auch Wimpernlifting werden die Naturhaare in einen angepassten Schwung hoch geliftet. Anschließend werden die Haare gefärbt un es wird ein pflegendes Öl aufgetragen.",
                                    children: [
                                        {
                                            name: "Augenbraunlifting",
                                            price: "49€",
                                            description: "Lifting der Augenbraun"
                                        },
                                        {
                                            name: "Wimpernlifting",
                                            price: "49€",
                                            description: "Lifting der Naturwimpern"
                                        },
                                        {
                                            name: "Kombi Paket",
                                            price: "85€",
                                            description: "Lifting beides"
                                        }
                                    ]
                                },
                                {
                                    name: "Zusatzleistung",
                                    description: "Sämtliche Leistungen",
                                    popular: true,
                                    children: [
                                        {
                                            name: "Augenbrauen zupfen",
                                            price: "10€",
                                            description: "Sauberes zupfen der Augenbrauen"
                                        },
                                        {
                                            name: "Augenbrauen färben",
                                            price: "10€",
                                            description: "Sauberes färben der Augenbrauen"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Nägel",
                            children: [
                                {
                                    name: "Shellac",
                                    description: "Shellac ist eine gute und schonende Alternative zu Gel und Acryl, es wird in dünnen Schichten gearbeitet und hat somit einen sehr natürlichen Effekt.",
                                    children: [
                                        {
                                            name: "Neumodellage",
                                            price: "35€",
                                            description: "Neumodellage"
                                        },
                                        {
                                            name: "~ Folgetermin",
                                            price: "40€",
                                            description: "Ablösen der alten Nägel und Neumodellage"
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: "Sonstiges",
                            children: [
                                {
                                    name: "Gutscheine",
                                    description: "Du kannst dir bei mir einen personalisierten Geschenkgutschein im Wert von 10-250€ erstellen und abholen lassen, gerne schicke ich dir diesen auch per Post zu.",
                                    children: [
                                        {
                                            name: "Geschenkgutschein",
                                            price: "10€ - 250€",
                                            description: "Personalisierter Geschenkgutschein"
                                        }
                                    ]
                                },
                            ]
                        }
                    ]}
                />
            </Column>

            <Column center paddingY="xl" id="contact" position={"relative"} maxWidth={50}>
                <Contact />
            </Column>

            <Column center paddingY="xl" position={"relative"} maxWidth={50} horizontal="center">
                <Footer />
            </Column>

            <ScrollToTopButton/>
        </Column>
    );
}
