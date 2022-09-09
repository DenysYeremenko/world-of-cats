import styles from './ImgPagination.module.css';

export const ImgPagination = props => {
  return (
    <ul className={styles.imgPaginationList}>
      <li className={styles.imgPaginationItem}>
        <button type="button" className={styles.imgPaginationButton}></button>
      </li>
      <li className={styles.imgPaginationItem}>
        <button type="button" className={styles.imgPaginationButton}></button>
      </li>
      <li className={styles.imgPaginationItem}>
        <button type="button" className={styles.imgPaginationButton}></button>
      </li>
      <li className={styles.imgPaginationItem}>
        <button type="button" className={styles.imgPaginationButton}></button>
      </li>
      <li className={styles.imgPaginationItem}>
        <button type="button" className={styles.imgPaginationButton}></button>
      </li>
    </ul>
  );
};
