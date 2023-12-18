import styles from './SharedLayout.module.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from './images/logo.svg';
import { Suspense, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { getMainShowed } from 'redux/sharedLayout/selectors';
import { toogleMainSectionShowed } from 'redux/sharedLayout/sharedLayoutSlice';
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
          <Link to=''>
            <img src={logo} alt='Pets Paw' className={styles.logo} />
          </Link>
        </header>
        <h1 className={styles.title}>Hi, Cat Admirer!</h1>
        <p className={styles.headerCaption}>Welcome to World of Cats</p>
        <p className={styles.navCaption}>Lets start using The Cat API</p>
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
