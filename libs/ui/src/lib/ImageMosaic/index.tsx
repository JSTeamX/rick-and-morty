import styles from './image-mosaic.module.scss'

export function ImageMosaic() {
  return (
    <div className={styles['mosaic']}>
      <img
        className={styles['mosaic__image']}
        alt="mosaic"
        src="/images/mosaic.png"
      />
    </div>
  );
}

export default ImageMosaic;
