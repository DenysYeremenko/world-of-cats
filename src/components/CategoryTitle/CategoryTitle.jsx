import styles from './CategoryTitle.module.scss';
import { BackButton } from 'components/BackButton/BackButton';
import { useLocation, useParams } from 'react-router-dom';

export const CategoryTitle = ({ categoryName }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { breedId } = useParams();
  
  return (
    <div className={styles.wrap}>
      <BackButton location={backLinkHref} />
      <h2 className={styles.categoryName}>{categoryName}</h2>
      {breedId && <h3 className={styles.breedId}>{breedId}</h3>}
    </div>
  );
};
