import styles from './UserCollectionsLink.module.css';
import { NavLink, useLocation } from 'react-router-dom';

export const UserCollectionsLink = ({ linkIcon, linkName }) => {
  const location = useLocation();

  return (
    <li className={styles.item}>
      <NavLink
        to={linkName}
        title={linkName}
        className={styles.link}
        state={{ from: location }}
      >
        <img src={linkIcon} alt={linkName} />
      </NavLink>
    </li>
  );
};
