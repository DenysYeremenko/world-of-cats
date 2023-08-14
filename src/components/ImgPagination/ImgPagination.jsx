import styles from './ImgPagination.module.scss';

export const ImgPagination = ({ images, changeImage }) => {
  return (
    <ul className={styles.imgPaginationList}>
      {images.map(url => (
        <li key={url} className={styles.imgPaginationItem}>
          <button
            type="button"
            className={styles.imgPaginationButton}
            onClick={() => {
              changeImage(url);
            }}
          ></button>
        </li>
      ))}
    </ul>
  );
};
