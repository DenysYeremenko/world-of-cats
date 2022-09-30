import styles from './BreedsView.module.scss';
import classNames from 'classnames';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { BreedsGallery } from 'components/BreedsGallery/BreedsGallery';
import { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { breedsList } from 'services/breedsList';
import { useGetBreedsQuery } from 'services/catApi';

const BreedsView = props => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { data, isFetching } = useGetBreedsQuery(params, {
    skip: !params.limit,
  });

  useEffect(() => {
    !params.limit && setSearchParams({ page: 0, limit: 5, order: 'ASC' });
  }, [setSearchParams, params]);

  const handleBreedChange = e => {
    navigate(`/category/breeds/${e.target.value}`, { replace: true });
  };

  const handleLimitChange = e => {
    setSearchParams({
      page: 0,
      limit: Number(e.target.value),
      order: params.order,
    });
  };

  const handleOrderChange = e => {
    e.target.className.includes('Z_A')
      ? setSearchParams({
          page: params.page,
          limit: params.limit,
          order: 'DESC',
        })
      : setSearchParams({
          page: params.page,
          limit: params.limit,
          order: 'ASC',
        });
  };

  return (
    <section className={styles.BreedsSection}>
      <div className={classNames(styles.topWrap)}>
        <CategoryTitle categoryName="breeds" location={'/'} />
        <form className={styles.breedsForm}>
          <select
            name="breeds"
            id="breeds"
            className={styles.breedsSelect}
            onChange={handleBreedChange}
          >
            <option value="">All breeds</option>
            {breedsList.map((breed, index) => {
              return (
                <option value={breed.id} key={index}>
                  {breed.name}
                </option>
              );
            })}
          </select>
          <select
            name="limitOfItems"
            id="limitOfItems"
            className={styles.limitSelect}
            onChange={handleLimitChange}
            value={params.limit}
          >
            <option value="5">Limit: 5</option>
            <option value="10">Limit: 10</option>
            <option value="15">Limit: 15</option>
            <option value="20">Limit: 20</option>
          </select>
          <button
            className={classNames(
              styles.sortingButton,
              styles.sortingButtonZ_A,
              params.order === 'DESC' && styles[params.order]
            )}
            type="button"
            onClick={handleOrderChange}
          ></button>
          <button
            className={classNames(
              styles.sortingButton,
              styles.sortingButtonA_Z,
              params.order === 'ASC' && styles[params.order]
            )}
            type="button"
            onClick={handleOrderChange}
          ></button>
        </form>
      </div>
      <BreedsGallery data={data} isFetching={isFetching} />
    </section>
  );
};

export default BreedsView;
