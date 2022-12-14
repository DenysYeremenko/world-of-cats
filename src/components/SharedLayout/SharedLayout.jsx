import styles from './SharedLayout.module.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from './images/logo.svg';
import { Suspense, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { getMainShowed } from 'redux/selectors';
import { toogleMainSectionShowed } from 'redux/sharedLayoutSlice';
import { NavigationMenu } from 'components/NavigationMenu/NavigationMenu';

export const SharedLayout = props => {
  const mainShowed = useSelector(getMainShowed);
  const dispatch = useDispatch();
  const location = useLocation();
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    if (isDesktop) {
      dispatch(toogleMainSectionShowed(true));
    } else if (!isDesktop && location.pathname === '/') {
      dispatch(toogleMainSectionShowed(false));
    }
  }, [dispatch, isDesktop, location.pathname]);

  const handleNavLink = () => {
    dispatch(toogleMainSectionShowed(true));
  };

  return (
    <div className={styles.layoutSection}>
      <div className={styles.layoutWrap}>
        <header>
          <Link to="">
            <img src={logo} alt="Pets Paw" className={styles.logo} />
          </Link>
        </header>
        <h1 className={styles.title}>Welcome to World of Cats</h1>
        <p className={styles.headerCaption}>
          Welcome to MI 2022 Front-end test
        </p>
        <p className={styles.navCaption}>Lets start using The Cat API</p>
        <ul>
          <li>
            Voting page: <span className={styles.readyText}>ready</span>
          </li>
          <li>
            Voting Likes, Favourites, Dislikes pages:{' '}
            <span className={styles.readyText}>ready</span>
          </li>
          <li>
            Breed page: <span className={styles.readyText}>ready</span>
          </li>
          <li>
            Gallery page:{' '}
            <span className={styles.inProgressText}>in progress</span>
          </li>
        </ul>

        <NavigationMenu handleNavLink={handleNavLink} />
      </div>
      {mainShowed && (
        <main className={styles.mainSection}>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      )}
    </div>
  );
};
