import styles from './BackButton.module.css';
import { Link } from 'react-router-dom';

export const BackButton = ({ location, setIsSelectedBreed }) => {
  return <Link to={location} className={styles.button}></Link>;
};
