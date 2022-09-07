import styles from './UserCollectionsLink.module.css';
import { NavLink } from 'react-router-dom';

export const UserCollectionsLink = ({ linkIcon, linkName }) => {
  return (
    <li className={styles.item}>
      <NavLink to={linkName} title={linkName} className={styles.link}>
        <img src={linkIcon} alt={linkName} />
      </NavLink>
    </li>
  );
};
