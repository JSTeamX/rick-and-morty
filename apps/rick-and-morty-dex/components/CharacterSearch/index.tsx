import styles from './character-search.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CharacterSearchProps {
  onCharacterSearch: (searchValue: string) => void;
  onSearchClear: () => void;
  minLengthSearch: number;
}

export function CharacterSearch(props: CharacterSearchProps) {
  const { onCharacterSearch, onSearchClear, minLengthSearch } = props;

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if(value.trim().length >= minLengthSearch){
      onCharacterSearch(event.target.value);
      return;
    }
    onSearchClear();
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder='Search Character...'
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export default CharacterSearch;
