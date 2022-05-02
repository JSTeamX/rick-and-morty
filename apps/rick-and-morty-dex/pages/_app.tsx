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
      <main className='page grid xl:grid-cols-5 md:grid-rows-layout'>
        <Header />
        <section className='page__content xl:col-start-1 xl:col-end-4'>
          <ComputerGear />
          <div className='content'>
            <div className='control'>
              <Component {...pageProps} />
            </div>
          </div>
        </section>
        <section className='justify-center hidden items-end xl:col-start-4 xl:col-end-7 xl:flex'>
          <ImageMosaic />
        </section>
      </main>
    </ApolloProvider>
  );
}

export default CustomApp;
