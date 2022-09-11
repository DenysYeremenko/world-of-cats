import styles from './Breeds.module.css';
import classNames from 'classnames';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { MasonryGallery } from 'components/MasonryGallery/MasonryGallery';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCatBreeds } from 'services/getCatAPI';
import { useOutletContext } from 'react-router-dom';

export const Breeds = props => {
  const [breedsState, setBreedsState] = useOutletContext();
  const [page, setPage] = useState(1);
  const location = useLocation();
  const locationBack = location.state?.from ?? '/';

  useEffect(() => {
    getCatBreeds(page, 10).then(breedsData => setBreedsState(breedsData));
  }, [setBreedsState, page]);

  return (
    <section className={styles.BreedsSection}>
      <div className={classNames(styles.topWrap)}>
        <CategoryTitle
          categoryName="breeds"
          breedId="28"
          location={locationBack}
        />
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
      </div>

      <MasonryGallery breedsState={breedsState} setPage={setPage} page={page} />
    </section>
  );
};
