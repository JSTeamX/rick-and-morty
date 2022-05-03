import styles from './SpaceAnimated.module.scss';

export function SpaceAnimated() {
  return (
    <div className={styles['space']}>
      <div className={styles['particle']}></div>
      <div className={styles['particle']}></div>
      <div className={styles['particle']}></div>
      <div className={styles['particle']}></div>
    </div>
  );
}

export default SpaceAnimated;
