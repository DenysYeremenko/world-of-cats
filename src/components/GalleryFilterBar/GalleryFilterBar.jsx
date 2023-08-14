import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { breedsList } from 'utils/breedsList';
import styles from './GalleryFilterBar.module.scss';

export const GalleryFilterBar = ({ refetch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  const handleParamChange = (paramName, paramValue) => {
    setSearchParams({
      ...params,
      [paramName]: paramValue,
    });
  };

  const orderOptions = [
    { value: 'RAND', label: 'Random' },
    { value: 'DESC', label: 'Desc' },
    { value: 'ASC', label: 'Asc' },
  ];

  const typeOptions = [
    { value: 'jpg,gif,png', label: 'All' },
    { value: 'jpg,png', label: 'Static' },
    { value: 'gif', label: 'Animated' },
  ];

  const limitOptions = [5, 10, 15, 20].map(value => ({
    value: value.toString(),
    label: `${value} items per page`,
  }));

  const handleRefetchButton = () => {
    refetch();
  };

  return (
    <div className={styles.formWrap}>
      <form className={styles.filterForm}>
        <label className={styles.selectLabel} htmlFor='order'>
          <span className={styles.labelTextWrap}>order</span>
          <select
            className={styles.formSelect}
            id='order'
            onChange={e => handleParamChange('order', e.target.value)}
          >
            {orderOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.selectLabel} htmlFor='type'>
          <span className={styles.labelTextWrap}>type</span>
          <select
            className={styles.formSelect}
            id='type'
            onChange={e => handleParamChange('type', e.target.value)}
          >
            {typeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.selectLabel} htmlFor='breed'>
          <span className={styles.labelTextWrap}>breed</span>
          <select
            className={styles.formSelect}
            id='breed'
            onChange={e => handleParamChange('breed', e.target.value)}
          >
            <option value='none'>None</option>
            {breedsList.map(({ name, id }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.selectLabel} htmlFor='limit'>
          <span className={styles.labelTextWrap}>limit</span>
          <select
            className={styles.formSelect}
            id='limit'
            onChange={e => handleParamChange('limit', e.target.value)}
          >
            {limitOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </form>
      <button type='button' className={styles.refetchButton} onClick={handleRefetchButton}></button>
    </div>
  );
};
