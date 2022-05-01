import CharacterSearch from '../../components/CharacterSearch';
import CharacterList from '../../components/CharacterList';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.content}>
      <div className={styles.control}>
        <div className={styles.heading}>
            <h1>Lista de personajes<span>_</span></h1>
        </div>
        <div className={styles.page}>
          <CharacterSearch />
          <div className='text-lg font-medium'>Hola</div>
          <CharacterList/>
        </div>
      </div>
    </div>
  );
}

export default Index;
