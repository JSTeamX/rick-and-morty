import CharacterSearch from '../../components/CharacterSearch';
import CharacterList from '../../components/CharacterList';
import styles from './index.module.scss';
import { DataQuery } from '../../providers/data-query';
import client from '../../providers/apollo-client';
import { Results, Character } from '../../interfaces';
import { useState } from 'react';

export type CharacterMainProps = {
  characters: Array<Character>;
}

function Index(props: CharacterMainProps) {
  const { characters } = props;

  const [searchedChars, setSearchedChars] = useState<Array<Character>>(characters);
  const [loader, setLoader] = useState<boolean>(true);

  const onCharacterSearch = async(searchKey: string) => {
    setLoader(true);
    try {
      const { data, loading } = await DataQuery.searchCharacterByName<Results<Character>>(searchKey, client);
      console.warn(loading)
      setSearchedChars(data?.characters?.results);
    }
    catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.control}>
        <div className={styles.heading}>
            <h1>Character Detail<span>_</span></h1>
        </div>
        <div className={styles.page}>
          <h1>Hola</h1>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const getProps = data => ({
    props: {
      characters: data?.characters?.results ?? [],
    },
  });

  try {
    const { data } = await DataQuery.getCharacters<Results<Character>>(client);
    return getProps(data);
  } catch {
    return getProps(null);
  }
};

export default Index;
