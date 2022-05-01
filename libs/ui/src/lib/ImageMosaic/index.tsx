import styles from './image-mosaic.module.scss'

/* eslint-disable-next-line */
export interface ImageMosaicProps {}

export function ImageMosaic(props: ImageMosaicProps) {
  return (
    <div className={styles['mosaic']}>
      <img
        className={styles['mosaic__image']}
        alt="mosaic"
        src="https://www.freepnglogos.com/uploads/rick-and-morty-png/miami-rick-pocket-mortys-rick-and-morty-wiki-fandom-16.png"
      />
    </div>
  );
}

export default ImageMosaic;
