import styles from './character-item.module.scss';
import Image from 'next/image'
import { Character } from '../../interfaces';

export interface CharacterItemProps {
  data: Character;
}

export function CharacterItem(props: CharacterItemProps) {
  const { name, image, status } = props.data;
  return (
    <div className={styles.character}>
      <div className={styles['character-image']}>
        <Image
          alt={name}
          src={image}
          layout='responsive'
          width="100%"
          height="100%"
          objectFit='cover'
        />
      </div>
      <div className={styles['character-details']}>
        <h3>{name}</h3>
        <p>
          <span className={styles['character-details__label']}>Status:</span>
          <span className={styles['character-details__value']}>
            { status }
          </span>
        </p>
      </div>
    </div>
  );
}

export default CharacterItem;
