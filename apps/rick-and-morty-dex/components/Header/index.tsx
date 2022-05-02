import styles from './header.module.scss';
import Image from 'next/image'
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['header']}>
      <div className={styles['header-logo']}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
              width={250}
              height={100}
              objectFit='cover'
              alt="Logo"
            />
          </a>
        </Link>
      </div>
      <nav className={styles['header-nav']}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li className={styles['header-nav--cta']}>
            <a href='mailto:heanfig@gmail.com'>Message me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
