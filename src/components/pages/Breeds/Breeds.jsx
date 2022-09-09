import styles from './Breeds.module.css';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import classNames from 'classnames';
import { MasonryGallery } from 'components/MasonryGallery/MasonryGallery';
import { SelectedBreed } from '../SelectedBreed/SelectedBreed';
import { useState } from 'react';

export const Breeds = props => {
  const [isSelectedBreed, setIsSelectedBreed] = useState(false);
  return (
    <section className={styles.BreedsSection}>
      <div
        className={classNames(
          styles.topWrap,
          isSelectedBreed && styles.selectedBreedStyle
        )}
      >
        <CategoryTitle
          categoryName="breeds"
          breedId="28"
          isSelectedBreed={isSelectedBreed}
        />
        {isSelectedBreed && <SelectedBreed />}
        {!isSelectedBreed && (
          <form className={styles.breedsForm}>
            <select name="breeds" id="breeds" className={styles.breedsSelect}>
              <option value="All breeds">All breeds</option>
            </select>
            <select
              name="limitOfItems"
              id="limitOfItems"
              className={styles.limitSelect}
            >
              <option value="10">Limit: 10</option>
            </select>
            <button
              className={classNames(
                styles.sortingButton,
                styles.sortingButtonZ_A
              )}
              type="button"
            ></button>
            <button
              className={classNames(
                styles.sortingButton,
                styles.sortingButtonA_Z
              )}
              type="button"
            ></button>
          </form>
        )}
      </div>
      {!isSelectedBreed && (
        <MasonryGallery setIsSelectedBreed={setIsSelectedBreed} />
      )}
    </section>
  );
};
