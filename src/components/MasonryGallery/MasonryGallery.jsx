import styles from './MasonryGallery.module.css';
import classNames from 'classnames';
import { PaginationButtons } from 'components/PaginationButtons/PaginationButtons';
import { Link, useLocation } from 'react-router-dom';

export const MasonryGallery = ({ setIsSelectedBreed, breedsState }) => {
  const location = useLocation();
  const topGallery = breedsState.filter((breed, index) => index <= 4);
  const buttomGallery = breedsState.filter((breed, index) => index > 4);

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
            })}{' '}
          </div>
          {/* <Link
            to={breedsState[0].id}
            state={{ from: location }}
            className={classNames(styles.item_1, styles.galleryItems)}
          >
            <img
              src={breedsState[0].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[0].name}
            </button>
          </Link>
          <Link
            to={breedsState[1].id}
            state={{ from: location }}
            className={classNames(styles.item_2, styles.galleryItems)}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[1].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[1].name}
            </button>
          </Link>
          <Link
            to="breedId"
            state={{ from: location }}
            className={classNames(styles.item_3, styles.galleryItems)}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[2].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[2].name}
            </button>
          </Link>
          <Link
            to="breedId"
            state={{ from: location }}
            className={classNames(styles.item_4, styles.galleryItems)}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[3].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[3].name}
            </button>
          </Link>
          <Link
            to="breedId"
            state={{ from: location }}
            className={classNames(styles.item_c, styles.galleryItems)}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[4].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[4].name}
            </button>
          </Link>
        </div>
        <div className={styles.gallery}>
          <Link
            to="breedId"
            state={{ from: location }}
            className={classNames(styles.item_d, styles.galleryItems)}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[5].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[5].name}
            </button>
          </Link>
          <Link
            to="breedId"
            state={{ from: location }}
            className={styles.galleryItems}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[6].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[6].name}
            </button>
          </Link>
          <Link
            to="breedId"
            state={{ from: location }}
            className={classNames(styles.item_e, styles.galleryItems)}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[7].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[7].name}
            </button>
          </Link>

          <Link
            to="breedId"
            state={{ from: location }}
            className={classNames(styles.item_f, styles.galleryItems)}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[8].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[8].name}
            </button>
          </Link>
          <Link
            to="breedId"
            state={{ from: location }}
            className={styles.galleryItems}
            onClick={() => {
              setIsSelectedBreed(true);
            }}
          >
            <img
              src={breedsState[9].image.url}
              className={styles.galleryImg}
              alt="cat"
            />
            <button type="button" className={styles.galleryButton}>
              {breedsState[9].name}
            </button>
          </Link> */}
        </div>
        <PaginationButtons />
      </>
    )
  );
};
