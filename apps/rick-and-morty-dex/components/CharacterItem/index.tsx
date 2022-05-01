import styles from './character-item.module.scss';
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CharacterItemProps {}

export function CharacterItem(props: CharacterItemProps) {
  return (
    <div className={styles.character}>
      <div className={styles['character-image']}>
        <Image
          alt='Rick and Morty'
          src="https://rickandmortyapi.com/api/character/avatar/268.jpeg"
          layout='responsive'
          width="100%"
          height="100%"
          objectFit='cover'
        />
      </div>
      <div className={styles['character-details']}>
        <h3>Rick Sanchez</h3>
        <p>
          <span className={styles['character-details__label']}>Status:</span>
          <span className={styles['character-details__value']}>
            Alive
          </span>
        </p>
      </div>
    </div>
  );
}

export default CharacterItem;
