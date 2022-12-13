import '../styles/global.css'
import Head from 'next/head';


function MyApp({ Component, pageProps }: any) {
  return <>
    <Head>
      <title>Cartão de todos</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp