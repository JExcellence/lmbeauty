import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="de">
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://lmbeauty.de/" />
                <meta name="description" content="LM Beauty in Oldenburg" />
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