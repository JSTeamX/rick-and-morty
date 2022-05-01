import styles from './character-list.module.scss';
import CharacterItem from '../CharacterItem';
import { Character } from '../../interfaces';

export type CharacterListProps = {
  characters: Array<Character>;
}

export function CharacterList(props: CharacterListProps) {
  const { characters } = props;
  return (
    <div className={styles['character-list']}>
      {
        characters.map( (character, index) => (
          <CharacterItem
            data={character}
            key={index.toString()}
          />
        ))
      }
    </div>
  );
}

export default CharacterList;
