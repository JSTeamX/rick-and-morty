import { ApolloProvider } from '@apollo/client';
import { ImageMosaic, SoundButton, SpaceAnimated } from '@rick-and-morty/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useContext, useState } from 'react';
import ComputerGear from '../components/ComputerGear';
import Header from '../components/Header';
import { HowlerProvider } from '../context/HowlerContext';
import client from '../providers/apollo-client';
import '../styles/globals.scss';
import { HowlerContext } from '../context/HowlerContext';
import { Howl } from 'howler';

function Layout(props){
  const howler = useContext<Howl>(HowlerContext);
  const [playing, setPlaying] = useState(false);

  const onButtonPressed = () => {
    if( howler.playing()) {
      setPlaying(false);
      howler.pause();
      return;
    }

    setPlaying(true);
    howler.play();
  }

  return (
    <main className='page grid xl:grid-cols-5 md:grid-rows-layout'>
      <Header />
      <section className='page__content xl:col-start-1 xl:col-end-4'>
        <SoundButton onButtonPressed={ onButtonPressed } playing={ playing } />
        <ComputerGear />
        <div className='content'>
          <div className='control'>
              { props.children }
          </div>
        </div>
      </section>
      <section className='justify-center hidden items-end xl:col-start-4 xl:col-end-7 xl:flex'>
        <ImageMosaic />
      </section>
    </main>
  )
}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Rick and Morty Dex</title>
      </Head>
      <SpaceAnimated />
      <HowlerProvider >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HowlerProvider>
    </ApolloProvider>
  );
}

export default CustomApp;
