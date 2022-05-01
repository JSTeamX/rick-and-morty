import CharacterSearch from '../../components/CharacterSearch';
import CharacterList from '../../components/CharacterList';
import styles from './index.module.scss';
import { DataQuery } from '../../providers/data-query';
import client from '../../providers/apollo-client';
import { Results, Character } from '../../interfaces';

export type CharacterMainProps = {
  characters: Array<Character>;
}

function Index(props: CharacterMainProps) {
  const { characters } = props;
  return (
    <div className={styles.content}>
      <div className={styles.control}>
        <div className={styles.heading}>
            <h1>Character List<span>_</span></h1>
        </div>
        <div className={styles.page}>
          <CharacterSearch />
          <CharacterList characters={characters}/>
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
