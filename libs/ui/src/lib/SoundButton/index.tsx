import styles from './sound-button.module.scss';

export interface SoundButtonProps {
  playing: boolean;
  onButtonPressed: () => void;
}

export function SoundButton(props:SoundButtonProps) {
  return (
    <div className={styles['sound-button']} onClick={props.onButtonPressed}>
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke={ props.playing ? '#38D2C8' : '#08220d'} d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
  )
}

export default SoundButton;
