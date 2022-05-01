import styles from './SpaceAnimated.module.scss';

/* eslint-disable-next-line */
export interface SpaceAnimatedProps {}

export function SpaceAnimated(props: SpaceAnimatedProps) {
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
