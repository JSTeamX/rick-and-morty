import styles from './character-list.module.scss';
import CharacterItem from '../CharacterItem';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CharacterListProps {}

export function CharacterList(props: CharacterListProps) {
  return (
    <div className={styles['character-list']}>
      {
        [...Array(12)].map( (_,index) => (
          <CharacterItem key={index.toString()} />
        ))
      }
    </div>
  );
}

export default CharacterList;
