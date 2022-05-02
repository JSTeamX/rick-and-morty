import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link rel="preconnect" href="use.typekit.net" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schoolbell&display=swap"
          rel="stylesheet"/>
        <link
          href="https://use.typekit.net/jsu8jmf.css"
          rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
