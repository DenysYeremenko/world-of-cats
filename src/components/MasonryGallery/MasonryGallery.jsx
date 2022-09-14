import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import styles from './MasonryGallery.module.css';

export const MasonryGalleryType1 = ({ galleryArray }) => {
  const location = useLocation();

  return (
    <div className={styles.gallery}>
      {galleryArray.map((breed, index) => {
        return (
          <Link
            key={breed.id}
            to={breed.id}
            state={{ from: location }}
            className={classNames(
              styles[`type1Item_${index + 1}`],
              styles.galleryItems
            )}
          >
            <img
              src={
                breed?.image?.url ??
                'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'
              }
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breed.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export const MasonryGalleryType2 = ({ galleryArray }) => {
  const location = useLocation();
  return (
    <div className={styles.gallery}>
      {galleryArray.map((breed, index) => {
        return (
          <Link
            key={breed.id}
            to={breed.id}
            state={{ from: location }}
            className={classNames(
              styles[`type2Item_${index + 1}`],
              styles.galleryItems
            )}
          >
            <img
              src={
                breed?.image?.url ??
                'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'
              }
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breed.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};
