import styles from './SelectedBreed.module.css';
import { ImgPagination } from 'components/ImgPagination/ImgPagination';

export const SelectedBreed = props => {
  return (
    <div>
      <div className={styles.imgWrap}>
        <img
          src="https://picsum.photos/300/600/?random"
          alt=""
          className={styles.breedImg}
        />
        <ImgPagination />
      </div>
    </div>
  );
};
