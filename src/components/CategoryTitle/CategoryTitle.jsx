import styles from './CategoryTitle.module.css';
import { BackButton } from 'components/BackButton/BackButton';

export const CategoryTitle = ({ categoryName, breedId, isSelectedBreed }) => {
  return (
    <div className={styles.wrap}>
      <BackButton />
      <h2 className={styles.categoryName}>{categoryName}</h2>
      {isSelectedBreed && <h3 className={styles.breedId}>{breedId}</h3>}
    </div>
  );
};
