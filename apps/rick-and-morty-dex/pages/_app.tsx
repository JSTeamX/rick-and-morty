import { ApolloProvider } from '@apollo/client';
import { ImageMosaic, SpaceAnimated } from '@rick-and-morty/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Driddle from '../components/Driddle';
import Header from '../components/Header';
import client from '../providers/apollo-client';
import '../styles/globals.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Welcome to rick-and-morty-dex!</title>
      </Head>
      <SpaceAnimated />
      <main className='page'>
        <Header />
          {/*<CharacterProvider>*/}
            <section className='page__content'>
              <Driddle />
              <Component {...pageProps} />
            </section>
            <aside className='aside'>
              <ImageMosaic />
            </aside>
          {/*</CharacterProvider>*/}
        {/*<Footer />*/}
      </main>
    </ApolloProvider>
  );
}

export default CustomApp;
