import styles from './character-list.module.scss';
import CharacterItem from '../CharacterItem';
import { Character } from '../../interfaces';
import Link from 'next/link';

export type CharacterListProps = {
  characters: Array<Character>;
}

export function CharacterList(props: CharacterListProps) {
  const { characters } = props;
  return (
    <div className={styles['character-list']}>
      {
        characters.map( (character, index) => (
          <Link
              href={`/character/${encodeURIComponent(character.id)}`}
              key={index.toString()} >
            <a>
              <CharacterItem
                data={character}
              />
            </a>
          </Link>
        ))
      }
    </div>
  );
}

export default CharacterList;
