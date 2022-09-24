import classNames from 'classnames';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './PaginationButtons.module.css';

export const PaginationButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { page, limit, order } = params;
  const pageNumber = Number(page);

  const handlePrevBtn = () => {
    pageNumber > 0 && setSearchParams({ page: pageNumber - 1, limit, order });
  };

  const handleNextBtn = () => {
    if (pageNumber < 13 && limit === '5') {
      setSearchParams({ page: pageNumber + 1, limit, order });
    } else if (pageNumber < 6 && limit === '10') {
      setSearchParams({ page: pageNumber + 1, limit, order });
    } else if (pageNumber < 4 && limit === '15') {
      setSearchParams({ page: pageNumber + 1, limit, order });
    } else if (pageNumber < 3 && limit === '20') {
      setSearchParams({ page: pageNumber + 1, limit, order });
    }
  };

  return (
    <div className={styles.paginationWrap}>
      <button
        type="button"
        className={classNames(styles.pagButton, styles.prevButton)}
        onClick={handlePrevBtn}
      >
        prev
      </button>
      <button
        type="button"
        className={classNames(styles.pagButton, styles.nextButton)}
        onClick={handleNextBtn}
      >
        next
      </button>
    </div>
  );
};
