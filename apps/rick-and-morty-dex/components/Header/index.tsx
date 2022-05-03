import styles from './header.module.scss';
import Image from 'next/image'
import Link from 'next/link';

export function Header() {
  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-between xl:col-start-1 xl:col-end-6'>
      <div className={styles['header-logo']}>
        <Link href="/characters">
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
            <Link href="/characters">
              <a className='transition duration-700 font-schoolbell text-3xl text-white'>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a className='transition duration-700 font-schoolbell text-3xl text-white'>
                Work
              </a>
            </Link>
          </li>
          <li className={styles['header-nav--cta']}>
            <a className='transition duration-700 font-schoolbell text-3xl text-white'
               href='mailto:heanfig@gmail.com'>
                Email
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
