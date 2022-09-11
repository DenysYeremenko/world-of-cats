import styles from './MasonryGallery.module.css';
import classNames from 'classnames';
import { PaginationButtons } from 'components/PaginationButtons/PaginationButtons';
import { Link, useLocation } from 'react-router-dom';

export const MasonryGallery = ({ breedsState, setPage, page }) => {
  const location = useLocation();
  const topGallery =
    breedsState && breedsState.filter((breed, index) => index <= 4);
  const buttomGallery =
    breedsState && breedsState.filter((breed, index) => index > 4);

  return (
    breedsState && (
      <>
        <div className={styles.gallery}>
          {topGallery.map((breed, index) => {
            return (
              <Link
                key={breed.id}
                to={breed.id}
                state={{ from: location }}
                className={classNames(
                  styles[`item_${index + 1}`],
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
          <div className={styles.gallery}>
            {buttomGallery.map((breed, index) => {
              return (
                <Link
                  key={breed.id}
                  to={breed.id}
                  state={{ from: location }}
                  className={classNames(
                    styles[`item_${index + 1}`],
                    styles.galleryItems
                  )}
                >
                  <img
                    src={breed.image.url}
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
        </div>
        <PaginationButtons setPage={setPage} page={page} />
      </>
    )
  );
};
