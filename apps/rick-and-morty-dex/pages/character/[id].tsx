import styles from './index.module.scss';
import { DataQuery } from '../../providers/data-query';
import client from '../../providers/apollo-client';
import { Results, Character } from '../../interfaces';
import Image from 'next/image';
import { CharacterStatus } from '../../enums/character-status';
import { Button } from '@rick-and-morty/ui';

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

  const [ episode ] = character.episode;

  return (
    <div className={styles.content}>
      <div className={styles.control}>
        <div className={styles.heading}>
            <h1>Character Detail<span>_</span></h1>
        </div>
        <div className={styles.page}>
          <figure className="p-8 grid grid-cols-3 gap-2">
            <div className='w-12/12'>
              <Image
                className="h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                alt={character.name}
                src={character.image}
                layout='responsive'
                width="100%"
                height="100%"
                objectFit='cover'
              />
            </div>
            <div className="col-span-2 px-8 text-center md:text-left space-y-4">
              <figcaption className="font-medium text-white font-ocr -tracking-4">
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Name: </div>
                  <div className='text-xl text-white'>
                    {character.name}
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Status: </div>
                  <div className='text-xl text-white'>
                    { character.status === CharacterStatus.ALIVE ? '💖' : '💀' }
                    {character.status}
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Species: </div>
                  <div className='text-xl text-white'>
                    {character.species}
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Gender: </div>
                  <div className='text-xl text-white'>
                    {character.gender}
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Origin: </div>
                  <div className='text-xl text-white pt-1'>
                    {character.origin.name}
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Location: </div>
                  <div className='text-xl text-white pt-1'>
                    {character.location.name}
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Episode </div>
                  <div className='text-xl text-white'>
                    🎞️ {episode.name}
                  </div>
                </div>
              </figcaption>
              <div className='pt-2'>
                <Button color="#dd372e" link='/character'>
                  return
                </Button>
                <Button color="#d6da17" link='/character'>
                  episode detail
                </Button>
              </div>
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
