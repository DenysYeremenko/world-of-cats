import styles from './Breeds.module.css';
import classNames from 'classnames';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { BreedsGallery } from 'components/BreedsGallery/BreedsGallery';
import { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCatBreeds } from 'services/getCatAPI';
import { useOutletContext } from 'react-router-dom';
import { breedsList } from 'services/breedsList';

export const Breeds = props => {
  const [breedsState, setBreedsState] = useOutletContext();
  // const [page, setPage] = useState(0);
  // const [limit, setLimit] = useState(5);
  // const [order, setOrder] = useState('ASC');

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams({ limit: 5, page: 0, order: 'ASC' });
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  useEffect(() => {
    !params.limit && setSearchParams({ page: 0, limit: 5, order: 'ASC' });
  }, [setSearchParams, params]);

  // const searchString = `order=${params.order}&limit=${params.limit}&page=${params.page}`;

  useEffect(() => {
    params.limit &&
      getCatBreeds(params).then(breedsData => {
        setBreedsState(breedsData);
      });
  }, [setBreedsState, params]);

  const handleBreedChange = e => {
    navigate(`/category/breeds/${e.target.value}`, { replace: true });
  };

  const handleLimitChange = e => {
    setSearchParams({
      page: 0,
      limit: Number(e.target.value),
      order: params.order,
    });
    // setLimit(Number(e.target.value));
    // setPage(0);
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
      <BreedsGallery
        breedsState={breedsState}
        setSearchParams={setSearchParams}
        page={Number(params.page)}
        limit={Number(params.limit)}
        order={params.order}
      />
    </section>
  );
};
