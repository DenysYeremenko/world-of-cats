import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styles from './MasonryGalleryItem.module.scss';
import deleteIcon from './icons/delete.svg';
import favouriteIcon from './icons/favourite.svg';
import { deleteLike, deleteFavourite, deleteDislike, addFavourite } from 'redux/votingViewSlice';
import { getFavouritesImages } from 'redux/selectors';

export const MasonryGalleryItem = ({ breed, index, isType1 }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const likedImages = useSelector(state => getFavouritesImages(state)).map(image => image.id);

  const addVotingItem = ({ id, url }) => {
    dispatch(addFavourite({ id, url }));
  };

  const handleImageAction = () => {
    if (location.pathname === '/category/gallery') {
      !likedImages.includes(breed.id)
        ? addVotingItem({ id: breed.id, url: breed.image.url })
        : handleDeleteVotingsItem(breed.id);
      return;
    }
    !breed.name && handleDeleteVotingsItem(breed.id);
  };

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
      case '/category/gallery':
        dispatch(deleteFavourite(id));
        break;
      default:
        break;
    }
  };

  const containerClassName = isType1 ? styles[`type1Item_${index + 1}`] : styles[`type2Item_${index + 1}`];

  return (
 location.pathname === '/category/gallery' ? (
      <div
        key={breed.id}
        state={{ from: location }}
        onClick={() => handleImageAction(breed)}
        className={classNames(containerClassName, styles.galleryItems)}
      >
        <img
          src={likedImages.includes(breed.id) ? deleteIcon : favouriteIcon}
          alt={likedImages.includes(breed.id) ? 'delete' : 'add to favourite'}
          className={styles.deleteIcon}
        />

        <img
          src={
            breed.image
              ? breed.image.url
              : 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'
          }
          className={styles.galleryImg}
          alt={breed.name ? breed.name : 'cat'}
        />
      </div>
    ) : (
      <Link
        key={breed.id}
        to={breed.name ? `/category/breeds/${breed.id}` : ''}
        state={{ from: location }}
        onClick={() => handleImageAction(breed)}
        className={classNames(containerClassName, styles.galleryItems)}
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
          <button type='button' className={styles.galleryButton}>
            {breed.name}
          </button>
        )}
      </Link>
    ))
};
