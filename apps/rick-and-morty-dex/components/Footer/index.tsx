import styles from './footer.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles.footer}>
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;
