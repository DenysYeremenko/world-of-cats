import styles from './SharedSearchBar.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserCollectionsLink } from 'components/UserCollectionsLink/UserCollectionsLink';
import likes from './images/icons/likes.svg';
import favouritesIcon from './images/icons/favourites.svg';
import dislikesIcon from './images/icons/dislikes.svg';
import { Suspense, useState } from 'react';
import { breedsList } from 'utils/breedsList';
import { useMediaQuery } from 'react-responsive';
import { HamburgerMenuButton } from 'components/HamburgerMenuButton/HamburgerMenuButton';
import { NavigationMenu } from 'components/NavigationMenu/NavigationMenu';
import { useDispatch } from 'react-redux';
import { toogleMainSectionShowed } from 'redux/sharedLayoutSlice';

const SharedSearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false);
  const [queryName, setQueryName] = useState('');
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const filteredBreeds = breedsList.filter(breed =>
    breed.name.toLowerCase().includes(queryName.toLowerCase()),
  );

  const handleNavLink = () => {
    dispatch(toogleMainSectionShowed(true));
    setHamburgerMenuStatus(false);
  };

  const handleHumburgerMenu = () => {
    setHamburgerMenuStatus(prevState => !prevState);
  };

  const handleSubmitSearch = e => {
    e.preventDefault();
    if (queryName.length < 3) {
      alert('Search query must contain at least 3 characters');
      return;
    }
    navigate(`search/?queryName=${queryName}`, { replace: true });
  };

  const handleChangeSearch = value => {
    setQueryName(value !== '' ? value : '');
  };

  return (
    <>
      {hamburgerMenuStatus && (
        <div className={styles.menuWrap}>
          <HamburgerMenuButton type='close' handleClick={handleHumburgerMenu} />
          <NavigationMenu handleNavLink={handleNavLink} />
        </div>
      )}
      {!hamburgerMenuStatus && (
        <>
          <div className={styles.categoryTopWrap}>
            {!isDesktop && <HamburgerMenuButton type='open' handleClick={handleHumburgerMenu} />}
            <form
              className={styles.searchFrom}
              onSubmit={e => {
                handleSubmitSearch(e);
              }}
            >
              <label htmlFor='search' className={styles.searchInputLabel}>
                <input
                  type='search'
                  name=''
                  id='search'
                  value={queryName}
                  onChange={e => handleChangeSearch(e.target.value)}
                  placeholder='Search for breeds by name'
                  className={styles.inputSearch}
                  list='breeds'
                  autoComplete='off'
                />
                <datalist id='breeds'>
                  {filteredBreeds.map(breed => (
                    <option key={breed.name} value={breed.name}></option>
                  ))}
                </datalist>
                <button type='submit' className={styles.submitButton}></button>
              </label>
            </form>
            <ul className={styles.UserCollections}>
              <UserCollectionsLink linkIcon={likes} linkName='likes' />
              <UserCollectionsLink linkIcon={favouritesIcon} linkName='favourites' />
              <UserCollectionsLink linkIcon={dislikesIcon} linkName='dislikes' />
            </ul>
          </div>
          <div className={styles.categoryBottomWrap}>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default SharedSearchBar;
