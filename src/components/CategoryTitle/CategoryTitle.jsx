import styles from './CategoryTitle.module.css';
import { BackButton } from 'components/BackButton/BackButton';
import { useLocation, useParams } from 'react-router-dom';

export const CategoryTitle = ({ categoryName }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? 'breeds';
  const { breedId } = useParams();
  console.log(location);
  return (
    <div className={styles.wrap}>
      <BackButton location={backLinkHref} />
      <h2 className={styles.categoryName}>{categoryName}</h2>
      {breedId && <h3 className={styles.breedId}>{breedId}</h3>}
    </div>
  );
};
