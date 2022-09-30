import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { breedsList } from 'services/breedsList';
import styles from './GalleryFilterBar.module.scss';

export const GalleryFilterBar = ({ refetch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const handleOrderChange = e => {
    setSearchParams({
      order: e.target.value,
      type: params.type,
      breed: params.breed,
      limit: params.limit,
    });
  };

  const handleTypeChange = e => {
    setSearchParams({
      order: params.order,
      type: e.target.value,
      breed: params.breed,
      limit: params.limit,
    });
  };

  const handleBreedChange = e => {
    setSearchParams({
      order: params.order,
      type: params.type,
      breed: e.target.value,
      limit: params.limit,
    });
  };

  const handleLimitChange = e => {
    setSearchParams({
      order: params.order,
      type: params.type,
      breed: params.breed,
      limit: e.target.value,
    });
  };

  const handleRefetchButton = e => {
    refetch();
  };

  return (
    <div className={styles.formWrap}>
      <form className={styles.filterForm}>
        <label className={styles.selectLabel} htmlFor="order">
          <span className={styles.labelTextWrap}>order</span>
          <select
            className={styles.formSelect}
            id="order"
            onChange={handleOrderChange}
          >
            <option value="RAND">Random</option>
            <option value="DESC">Desc</option>
            <option value="ASC">Asc</option>
          </select>
        </label>
        <label className={styles.selectLabel} htmlFor="type">
          <span className={styles.labelTextWrap}>type</span>
          <select
            className={styles.formSelect}
            id="type"
            onChange={handleTypeChange}
          >
            <option value="jpg,gif,png">All</option>
            <option value="jpg,png">Static</option>
            <option value="gif">Animated</option>
          </select>
        </label>
        <label className={styles.selectLabel} htmlFor="breed">
          <span className={styles.labelTextWrap}>breed</span>
          <select
            className={styles.formSelect}
            id="breed"
            onChange={handleBreedChange}
          >
            <option value="none">None</option>
            {breedsList.map(({ name, id }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.selectLabel} htmlFor="limit">
          <span className={styles.labelTextWrap}>limit</span>
          <select
            className={styles.formSelect}
            id="limit"
            onChange={handleLimitChange}
          >
            <option value="5">5 items per page</option>
            <option value="10">10 items per page</option>
            <option value="15">15 items per page</option>
            <option value="20">20 items per page</option>
          </select>
        </label>
      </form>
      <button
        type="button"
        className={styles.refetchButton}
        onClick={handleRefetchButton}
      ></button>
    </div>
  );
};
