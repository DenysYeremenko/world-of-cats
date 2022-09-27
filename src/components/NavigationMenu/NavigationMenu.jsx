import { NavItem } from 'components/NavItem/NavItem';
import styles from './NavigationMenu.module.scss';
import voting from './images/voting.svg';
import breeds from './images/breeds.svg';
import gallery from './images/gallery.svg';

export const NavigationMenu = ({ handleNavLink }) => {
  return (
    <nav>
      <ul className={styles.navList}>
        <NavItem
          linkPath="category/voting"
          imgSrc={voting}
          linkName="voting"
          handleNavLink={handleNavLink}
        />
        <NavItem
          linkPath="category/breeds"
          imgSrc={breeds}
          linkName="breeds"
          handleNavLink={handleNavLink}
        />
        <NavItem
          linkPath="category/gallery"
          imgSrc={gallery}
          linkName="gallery"
          handleNavLink={handleNavLink}
        />
      </ul>
    </nav>
  );
};
