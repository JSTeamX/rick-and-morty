import Link from 'next/link';
import styles from './button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  link: string;
  color: string;
}

export function Button(props: ButtonProps) {
  return (
    <Link href={props.link}>
      <button
        className={styles['button']}
        style={{ backgroundColor: props.color }}>
        { props.children }
      </button>
    </Link>
  );
}

export default Button;
