import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import styles from './MasonryGallery.module.css';
import deleteIcon from './images/icons/delete.svg';
import { useDispatch } from 'react-redux';
import {
  deleteLike,
  deleteFavourite,
  deleteDislike,
} from 'redux/votingViewSlice';

export const MasonryGalleryType1 = ({ galleryArray }) => {
  const location = useLocation();

  const dispatch = useDispatch();
  const handleDeleteVotingsItem = id => {
    switch (location.pathname) {
      case '/category/likes':
        dispatch(deleteLike(id));
        break;
      case '/category/favourites':
        dispatch(deleteFavourite(id));
        break;
      case '/category/dislikes':
        dispatch(deleteDislike(id));
        break;
      default:
        break;
    }
    dispatch(deleteLike(id));
  };

  return (
    <div className={styles.gallery}>
      {galleryArray.map((breed, index) => {
        return (
          <Link
            key={breed.id}
            to={breed.name ? `/category/breeds/${breed.id}` : ''}
            state={{ from: location }}
            onClick={() => !breed.name && handleDeleteVotingsItem(breed.id)}
            className={classNames(
              styles[`type1Item_${index + 1}`],
              styles.galleryItems
            )}
          >
            <img
              src={
                breed.image
                  ? breed.image.url
                  : 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'
              }
              className={styles.galleryImg}
              alt={breed.name ? breed.name : 'cat'}
            />
            {breed.name && (
              <button type="button" className={styles.galleryButton}>
                {breed.name}
              </button>
            )}
            {!breed.name && (
              <img
                src={deleteIcon}
                alt="delete"
                className={styles.deleteIcon}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export const MasonryGalleryType2 = ({ galleryArray }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleDeleteVotingsItem = id => {
    dispatch(deleteLike(id));
  };
  return (
    <div className={styles.gallery}>
      {galleryArray.map((breed, index) => {
        return (
          <Link
            key={breed.id}
            to={breed.name ? `/category/breeds/${breed.id}` : ''}
            state={{ from: location }}
            onClick={() => !breed.name && handleDeleteVotingsItem(breed.id)}
            className={classNames(
              styles[`type2Item_${index + 1}`],
              styles.galleryItems
            )}
          >
            <img
              src={
                breed.image
                  ? breed.image.url
                  : 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'
              }
              className={styles.galleryImg}
              alt={breed.name ? breed.name : 'cat'}
            />
            {breed.name && (
              <button type="button" className={styles.galleryButton}>
                {breed.name}
              </button>
            )}
            {!breed.name && (
              <img
                src={deleteIcon}
                alt="delete"
                className={styles.deleteIcon}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};
