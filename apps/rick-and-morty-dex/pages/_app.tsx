import { ApolloProvider } from '@apollo/client';
import { ImageMosaic, SpaceAnimated } from '@rick-and-morty/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import ComputerGear from '../components/ComputerGear';
import Header from '../components/Header';
import client from '../providers/apollo-client';
import '../styles/globals.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Rick and Morty Dex</title>
      </Head>
      <SpaceAnimated />
      <main className='page'>
        <Header />
          <section className='page__content'>
            <ComputerGear />
            <Component {...pageProps} />
          </section>
          <aside className='aside'>
            <ImageMosaic />
          </aside>
        {/*<Footer />*/}
      </main>
    </ApolloProvider>
  );
}

export default CustomApp;
