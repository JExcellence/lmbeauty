import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="de">
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://lmbeauty.de/" />
                <meta name="description" content="Hi, ich bin Lisa – deine Make-up & Wimpernexpertin in Oldenburg. Mit Leidenschaft und Präzision hebe ich deine einzigartige Schönheit hervor. Ob natürlicher Alltagslook oder glamouröser Abendstil: Gemeinsam kreieren wir, was zu dir passt. Vertraue auf 𝗟𝗠 𝗕𝗲𝗮𝘂𝘁𝘆 – wo Professionalität und Herzblut dein Strahlen unterstreichen. 💫 Jetzt Termin sichern und dich verwandeln lassen!" />
                <meta property="og:title" content="LM Beauty in Oldenburg" />
                <meta property="og:site_name" content="LM Beauty Oldenburg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}