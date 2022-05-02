import styles from './episodes.module.scss';
import { DataQuery } from '../../providers/data-query';
import client from '../../providers/apollo-client';
import { Results, Episode } from '../../interfaces';
import Image from 'next/image';
import { Button } from '@rick-and-morty/ui';
import Link from 'next/link';

export type EpisodeProps = {
  episode: Episode;
}

export type ServerSideProps = {
  query: {
    id: string;
  }
}

function Index(props: EpisodeProps) {
  const { episode } = props;

  return (
    <>
      <div className={styles.heading}>
          <h1>Episode Detail<span>_</span></h1>
      </div>
      <div className={styles.page}>
        <figure className="p-8 grid grid-cols-1 gap-2">
          <div className="col-span-2 px-8 text-center md:text-left space-y-4">
            <figcaption className="font-medium text-white font-ocr -tracking-4">
              <div className='flex flex-row'>
                <div className='text-xl text-portal pr-4'> Name: </div>
                <div className='text-xl text-white'>
                  {episode.name}
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='text-xl text-portal pr-4'> Episode: </div>
                <div className='text-xl text-white'>
                  { episode.episode }
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='text-xl text-portal pr-4'> Air Date: </div>
                <div className='text-xl text-white'>
                  { episode.air_date }
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='text-xl text-portal pr-4'> Characters </div>
                <div className='text-xl text-white'>
                  <div className={ styles['character-list']}>
                    { episode.characters.map( (item, index) => (
                      <div key={index} className={styles['character-item']}>
                        <Link href={`/characters/${item.id}`}>
                          <a>
                            <Image
                              title={item.name}
                              className="h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                              alt={item.name}
                              src={item.image}
                              layout='responsive'
                              width="100%"
                              height="100%"
                              objectFit='cover'
                            />
                          </a>
                        </Link>
                      </div>
                    )) }
                  </div>
                </div>
              </div>
            </figcaption>
            <div className='pt-2'>
              <Button color="#dd372e" link='/characters'>
                return to home
              </Button>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ query }: ServerSideProps) => {
  const { id } = query;

  const getProps = episode => ({
    props: {
      episode
    },
  });

  try {
    const { data } = await DataQuery.getEpisodeDetail<Results<Episode>>(id, client);
    return getProps(data?.episode || {});
  } catch (e) {
    return getProps(null);
  }
};

export default Index;
