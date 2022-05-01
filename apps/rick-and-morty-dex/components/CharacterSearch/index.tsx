import styles from './character-search.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CharacterSearchProps {}

export function CharacterSearch(props: CharacterSearchProps) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder='Search Character...' />
    </div>
  );
}

export default CharacterSearch;
