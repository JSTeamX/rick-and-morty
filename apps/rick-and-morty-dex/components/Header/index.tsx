import styles from './header.module.scss';
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['header']}>
      <div className={styles['header-logo']}>
          <Image
            src="/images/logo.png"
            width={250}
            height={100}
            objectFit='cover'
            alt="Logo"
          />
      </div>
      <nav className={styles['header-nav']}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li className={styles['header-nav--cta']}>
            <a>Message me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
