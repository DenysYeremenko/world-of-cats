import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { useSearchParams } from 'react-router-dom';
// import { breedsList } from 'services/breedsList';
// import { useGetSelectedBreedQuery } from 'services/catApi';
// import styles from './SearchView.module.css';

const SearchView = props => {
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('queryName') ?? '';
  // const filteredBreeds = breedsList.filter(breed =>
  //   breed.name.toLowerCase().includes(queryName.toLowerCase())
  // );
  // const breedIds = filteredBreeds.map(b => b.id).join(',');
  // const { data, error, isFetching } = useGetSelectedBreedQuery(breedIds);

  return (
    <div>
      <CategoryTitle categoryName="search" />
      {queryName && <h4>Search results for: {queryName}</h4>}
    </div>
  );
};

export default SearchView;
