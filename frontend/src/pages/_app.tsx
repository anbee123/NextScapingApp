import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Project</title>
        <link rel="icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A search query project with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
