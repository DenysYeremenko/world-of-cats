import styles from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

export const NavItem = ({ linkPath, imgSrc, linkName }) => {
  return (
    <li className={styles.navItem}>
      <NavLink
        to={`/${linkPath}`}
        className={({ isActive }) =>
          `${styles.navLink} ` + (isActive ? styles.selected : '')
        }
      >
        <img src={imgSrc} alt={`${linkPath}`} id={styles['navIcon']} />
        <button
          type="button"
          className={styles.navButton}
          id={styles['navButton']}
        >
          {linkName}
        </button>
      </NavLink>
    </li>
  );
};
