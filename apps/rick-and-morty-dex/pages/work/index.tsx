import { Button } from '@rick-and-morty/ui';
import styles from './work.module.scss';

function Index() {
  return (
    <div className={styles.content}>
      <div className={styles.control}>
        <div className={styles.heading}>
            <h1>About me<span>_</span></h1>
        </div>
        <div className={styles.page}>
        <figure className="pt-8 grid grid-cols-1 gap-2">
            <div className="col-span-2 px-8 text-center md:text-left space-y-4">
              <figcaption className="font-medium text-white font-ocr -tracking-4">
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Name: </div>
                  <div className='text-xl text-white'>
                    Herman Andres
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Email: </div>
                  <div className='text-xl text-white'>
                    heanfig@gmail.com
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Test date: </div>
                  <div className='text-xl text-white'>
                    2 may 2022
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl text-portal pr-4'> Location: </div>
                  <div className='text-xl text-white'>
                    Manizales, Caldas Colombia
                  </div>
                </div>
              </figcaption>
              <div className='pt-2'>
                <Button color="#dd372e" link='/characters'>
                  return to home
                </Button>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Index;
