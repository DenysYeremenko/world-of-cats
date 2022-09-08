import classNames from 'classnames';
import styles from './PaginationButtons.module.css';

export const PaginationButtons = props => {
  return (
    <div className={styles.paginationWrap}>
      <button
        type="button"
        className={classNames(styles.pagButton, styles.prevButton)}
      >
        prev
      </button>
      <button
        type="button"
        className={classNames(styles.pagButton, styles.nextButton)}
      >
        next
      </button>
    </div>
  );
};
