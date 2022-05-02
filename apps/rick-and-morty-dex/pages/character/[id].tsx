import CharacterSearch from '../../components/CharacterSearch';
import CharacterList from '../../components/CharacterList';
import styles from './index.module.scss';
import { DataQuery } from '../../providers/data-query';
import client from '../../providers/apollo-client';
import { Results, Character } from '../../interfaces';
import { useState } from 'react';
import Image from 'next/image';

export type CharacterMainProps = {
  character: Character;
}

export type ServerSideProps = {
  query: {
    id: string;
  }
}

function Index(props: CharacterMainProps) {
  const { character } = props;

  console.log(character)

  return (
    <div className={styles.content}>
      <div className={styles.control}>
        <div className={styles.heading}>
            <h1>Character Detail<span>_</span></h1>
        </div>
        <div className={styles.page}>
          <figure className="p-8 grid grid-cols-2 gap-2">
            <div className='w-12/12'>
              <Image
                className="h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                alt={'H'}
                src='https://rickandmortyapi.com/api/character/avatar/7.jpeg'
                layout='responsive'
                width="100%"
                height="100%"
                objectFit='cover'
              />
            </div>
            <div className="md:p-8 text-center md:text-left space-y-4">
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query }: ServerSideProps) => {
  const { id } = query;

  const getProps = character => ({
    props: {
      character
    },
  });

  try {
    const { data } = await DataQuery.getCharacter<Results<Character>>(id, client);
    return getProps(data?.character || {});
  } catch (e) {
    return getProps(null);
  }
};

export default Index;
