
import styles from './index.module.scss';
import CharacterSearch from '../../components/CharacterSearch';
import CharacterList from '../../components/CharacterList';
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
  const [loader, setLoader] = useState<boolean>(false);

  const onCharacterSearch = async(searchKey: string) => {
    setLoader(true);
    try {
      const { data, loading } = await DataQuery.searchCharacterByName<Results<Character>>(searchKey, client);
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
            <h1>Character List<span>_</span></h1>
        </div>
        <div className={styles.page}>
            <CharacterSearch
              onCharacterSearch={onCharacterSearch}
              minLengthSearch={2}
              onSearchClear={() => setSearchedChars(characters)}
            />
            {
              loader ?
                <span className={styles.loader}>
                  <h1>Loading data<span>...</span></h1>
                </span>
              : <CharacterList characters={searchedChars}/>
            }
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
