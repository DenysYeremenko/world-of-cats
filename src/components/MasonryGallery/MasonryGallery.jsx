import styles from './MasonryGallery.module.css';
import classNames from 'classnames';
import { PaginationButtons } from 'components/PaginationButtons/PaginationButtons';
import { Link } from 'react-router-dom';

export const MasonryGallery = ({ setIsSelectedBreed }) => {
  return (
    <>
      <div className={styles.gallery}>
        <div
          className={classNames(styles.item_1, styles.galleryItems)}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/300/600/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
        <div
          className={classNames(styles.item_2, styles.galleryItems)}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/600/300/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
        <div
          className={classNames(styles.item_3, styles.galleryItems)}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/200/200/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
        <div
          className={classNames(styles.item_4, styles.galleryItems)}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/200/500/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
        <div
          className={classNames(styles.item_c, styles.galleryItems)}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/200/400/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
      </div>
      <div className={styles.gallery}>
        <div
          className={classNames(styles.item_d, styles.galleryItems)}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/300/600/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
        <div
          className={styles.galleryItems}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/600/300/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
        <div
          className={classNames(styles.item_e, styles.galleryItems)}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/200/200/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>

        <div
          className={classNames(styles.item_f, styles.galleryItems)}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/200/400/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
        <div
          className={styles.galleryItems}
          onClick={() => {
            setIsSelectedBreed(true);
          }}
        >
          <img
            src="https://picsum.photos/200/500/?random"
            className={styles.galleryImg}
            alt="cat"
          />
          <button type="button" className={styles.galleryButton}>
            Breed
          </button>
        </div>
      </div>
      <PaginationButtons />
    </>
  );
};
