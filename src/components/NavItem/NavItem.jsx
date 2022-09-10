import styles from './NavItem.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const NavItem = ({ linkPath, imgSrc, linkName }) => {
  const location = useLocation();

  return (
    <li className={styles.navItem}>
      <NavLink
        to={`/${linkPath}`}
        state={{ from: location }}
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
