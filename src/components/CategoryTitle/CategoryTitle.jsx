import styles from './CategoryTitle.module.css';
import { BackButton } from 'components/BackButton/BackButton';

export const CategoryTitle = ({ categoryName }) => {
  return (
    <div className={styles.wrap}>
      <BackButton />
      <h2 className={styles.categoryName}>{categoryName}</h2>
    </div>
  );
};
