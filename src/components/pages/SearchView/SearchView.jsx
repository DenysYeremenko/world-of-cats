import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { Loader } from 'components/Loader/Loader';
import { MasonryGalleryType1 } from 'components/MasonryGallery/MasonryGallery';
import { useSearchParams } from 'react-router-dom';
import { useGetBreedsByNameQuery } from 'services/catApi';
import styles from './SearchView.module.scss';

const SearchView = props => {
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('queryName') ?? '';
  const { data, error, isFetching, isLoading } = useGetBreedsByNameQuery(
    queryName,
    {
      skip: !queryName,
    }
  );

  return (
    <div>
      <CategoryTitle categoryName="search" />
      {queryName && (
        <p className={styles.searchTitle}>
          Search results for:{' '}
          <span className={styles.queryName}>{queryName}</span>
        </p>
      )}
      {isFetching && <Loader />}
      {data && data.length <= 0 && <h3>Sorry, breeds not found</h3>}
      {data && <MasonryGalleryType1 galleryArray={data} />}
    </div>
  );
};

export default SearchView;
