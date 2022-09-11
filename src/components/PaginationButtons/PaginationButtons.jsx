import classNames from 'classnames';
import styles from './PaginationButtons.module.css';

export const PaginationButtons = ({ setPage, page }) => {
  return (
    <div className={styles.paginationWrap}>
      <button
        type="button"
        className={classNames(styles.pagButton, styles.prevButton)}
        onClick={() => {
          page > 1 && setPage(page - 1);
        }}
      >
        prev
      </button>
      <button
        type="button"
        className={classNames(styles.pagButton, styles.nextButton)}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );
};
