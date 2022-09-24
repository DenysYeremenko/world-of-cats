import { Outlet, useNavigate } from 'react-router-dom';
import styles from './SharedSearchBar.module.css';
import { UserCollectionsLink } from 'components/UserCollectionsLink/UserCollectionsLink';
import likes from './images/icons/likes.svg';
import favourites from './images/icons/favourites.svg';
import dislikes from './images/icons/dislikes.svg';
import { Suspense, useState } from 'react';
import { breedsList } from 'services/breedsList';

const SharedSearchBar = () => {
  const navigate = useNavigate();
  const [breedsState, setBreedsState] = useState(null);
  const [queryName, setQueryName] = useState('');

  const filteredBreeds = breedsList.filter(breed =>
    breed.name.toLowerCase().includes(queryName.toLowerCase())
  );

  const handleSubmitSearch = e => {
    e.preventDefault();
    navigate(`search/?queryName=${queryName}`, { replace: true });
  };

  const handleChangeSearch = value => {
    // const breedId = breedsList.find(breed => {
    //   breed.name = value;
    // });
    setQueryName(value !== '' ? value : '');
  };

  return (
    <>
      <div className={styles.categoryTopWrap}>
        <form
          action=""
          onSubmit={e => {
            handleSubmitSearch(e);
          }}
        >
          <label htmlFor="search" className={styles.searchInputLabel}>
            <input
              type="search"
              name=""
              id="search"
              value={queryName}
              onChange={e => handleChangeSearch(e.target.value)}
              placeholder="Search for breeds by name"
              className={styles.inputSearch}
              list="breeds"
              autoComplete="off"
            />
            <datalist id="breeds">
              {filteredBreeds.map(breed => (
                <option key={breed.name} value={breed.name}></option>
              ))}
            </datalist>
            <button type="submit" className={styles.submitButton}></button>
          </label>
        </form>
        <ul className={styles.UserCollections}>
          <UserCollectionsLink linkIcon={likes} linkName="likes" />
          <UserCollectionsLink linkIcon={favourites} linkName="favourites" />
          <UserCollectionsLink linkIcon={dislikes} linkName="dislikes" />
        </ul>
      </div>
      <div className={styles.categoryBottomWrap}>
        <Suspense>
          <Outlet context={[breedsState, setBreedsState]} />
        </Suspense>
      </div>
    </>
  );
};

export default SharedSearchBar;
