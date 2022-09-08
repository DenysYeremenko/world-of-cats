import styles from './Breeds.module.css';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import classNames from 'classnames';
import { MasonryGallery } from 'components/MasonryGallery/MasonryGallery';

export const Breeds = props => {
  return (
    <section className={styles.BreedsSection}>
      <div className={styles.topWrap}>
        <CategoryTitle categoryName="breeds" />
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
      <MasonryGallery />
    </section>
  );
};
