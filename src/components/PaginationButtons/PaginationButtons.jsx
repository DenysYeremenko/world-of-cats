import classNames from 'classnames';
import styles from './PaginationButtons.module.css';

export const PaginationButtons = ({ setSearchParams, page, limit, order }) => {
  return (
    <div className={styles.paginationWrap}>
      <button
        type="button"
        className={classNames(styles.pagButton, styles.prevButton)}
        onClick={() => {
          page > 0 && setSearchParams({ page: page - 1, limit, order });
        }}
      >
        prev
      </button>
      <button
        type="button"
        className={classNames(styles.pagButton, styles.nextButton)}
        onClick={() => {
          if (page < 13 && limit === 5) {
            setSearchParams({ page: page + 1, limit, order });
            // setPage(page + 1);
          } else if (page < 6 && limit === 10) {
            setSearchParams({ page: page + 1, limit, order });
            // setPage(page + 1);
          } else if (page < 4 && limit === 15) {
            setSearchParams({ page: page + 1, limit, order });
            // setPage(page + 1);
          } else if (page < 3 && limit === 20) {
            setSearchParams({ page: page + 1, limit, order });
            // setPage(page + 1);
          }
        }}
      >
        next
      </button>
    </div>
  );
};
