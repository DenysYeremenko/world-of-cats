import { Outlet } from 'react-router-dom';
import styles from './Category.module.css';
import { BackButton } from 'components/BackButton/BackButton';
import { UserCollectionsLink } from 'components/UserCollectionsLink/UserCollectionsLink';
import likes from './images/icons/likes.svg';
import favourites from './images/icons/favourites.svg';
import dislikes from './images/icons/dislikes.svg';

export const Category = props => {
  return (
    <>
      <div className={styles.votingTopWrap}>
        <form action="">
          <label htmlFor="search" className={styles.searchInputLabel}>
            <input
              type="search"
              name=""
              id="search"
              placeholder="Search for breeds by name"
              className={styles.inputSearch}
            />
            <button type="submit" className={styles.submitButton}></button>
          </label>
        </form>
        <ul className={styles.UserCollections}>
          <UserCollectionsLink linkIcon={likes} linkName="likes" />
          <UserCollectionsLink linkIcon={favourites} linkName="favourites" />
          <UserCollectionsLink linkIcon={dislikes} linkName="dislikes" />
        </ul>
      </div>
      <div className={styles.votingBottomWrap}>
        <BackButton />
        <h2>voting</h2>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
