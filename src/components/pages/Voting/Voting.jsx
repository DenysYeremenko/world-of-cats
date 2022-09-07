import styles from './Voting.module.css';
import { Category } from '../Category/Category';

export const Voting = props => {
  return (
    <section>
      {/* <div className={styles.votingTopWrap}>
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
        <h2>voting</h2> */}
      <div>
        <img src="" alt="cat" />
        <ul>
          <li>
            <button>add to likes</button>
          </li>
          <li>
            <button>add to favourites</button>
          </li>
          <li>
            <button>add to dislikes</button>
          </li>
        </ul>
        <ul>
          <li>
            <time>22:35</time>
            <p>
              Image ID:<span>fQSunHvl8</span> was added to Favourites
            </p>
            <span>Icon</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
