import styles from './Layout.module.css';
import { Outlet, Link } from 'react-router-dom';
import logo from './images/logo.svg';
import voting from './images/voting.svg';
import breeds from './images/breeds.svg';
import gallery from './images/gallery.svg';
import { NavItem } from 'components/NavItem/NavItem';

export const Layout = props => {
  return (
    <div className={styles.layoutSection}>
      <div className={styles.layoutWrap}>
        <header>
          <Link to="/">
            <img src={logo} alt="Pets Paw" className={styles.logo} />
          </Link>
        </header>
        <h1 className={styles.header}>Welcome to World of Cats</h1>
        <p className={styles.headerCaption}>
          Welcome to MI 2022 Front-end test
        </p>
        <p className={styles.navCaption}>Lets start using The Cat API</p>
        <nav>
          <ul className={styles.navList}>
            <NavItem
              linkPath="category/voting"
              imgSrc={voting}
              linkName="voting"
            />
            <NavItem
              linkPath="category/breeds"
              imgSrc={breeds}
              linkName="breeds"
            />
            <NavItem
              linkPath="category/gallery"
              imgSrc={gallery}
              linkName="gallery"
            />
          </ul>
        </nav>
      </div>
      <main className={styles.mainSection}>
        <Outlet />
      </main>
    </div>
  );
};
