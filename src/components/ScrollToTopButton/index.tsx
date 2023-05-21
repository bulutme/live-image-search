import classNames from 'classnames';
import Back from '../../assets/images/back-button.png';
import styles from './ScrollToTopButton.module.css';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {

  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsActive(window.scrollY > 500)

  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <button
      className={classNames(styles.scrollToTopButton, isActive && styles.active)}
      onClick={handleClick}
    >
      <img className={styles.icon} src={Back} alt="Back" />
    </button>
  );
}
