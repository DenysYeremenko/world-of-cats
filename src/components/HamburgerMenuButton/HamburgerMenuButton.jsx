import styles from './HamburgerMenuButton.module.scss';
import menuIcon from './images/icons/menu.svg';
import closeIcon from './images/icons/close.svg';

export const HamburgerMenuButton = ({ type, handleClick }) => {
  return (
    <button
      type="button"
      className={styles.hamburgerMenuBtn}
      onClick={() => handleClick()}
    >
      {type === 'open' && <img src={menuIcon} alt="menu button" />}
      {type === 'close' && <img src={closeIcon} alt="close button" />}
    </button>
  );
};
