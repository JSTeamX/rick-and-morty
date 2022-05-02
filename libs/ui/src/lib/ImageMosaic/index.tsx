import styles from './image-mosaic.module.scss'

/* eslint-disable-next-line */
export interface ImageMosaicProps {}

export function ImageMosaic(props: ImageMosaicProps) {
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
