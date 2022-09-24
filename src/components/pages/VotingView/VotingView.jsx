import styles from './VotingView.module.css';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import catExample from './images/cat-example.png';
import smallLike from './images/icons/like-icon.svg';

const VotingView = () => {
  const locationBack = '/';
  return (
    <section>
      <CategoryTitle categoryName="voting" location={locationBack} />
      <div className={styles.imgWrap}>
        <img src={catExample} alt="cat" className={styles.catImage} />
        <ul className={styles.buttonList}>
          <li className={styles.buttonItem}>
            <button className={styles.addButton}></button>
          </li>
          <li className={styles.buttonItem}>
            <button className={styles.addButton}></button>
          </li>
          <li className={styles.buttonItem}>
            <button className={styles.addButton}></button>
          </li>
        </ul>
      </div>
      <ul className={styles.collectionList}>
        <li className={styles.collectionItem}>
          <time className={styles.collectionTime}>22:35</time>
          <p className={styles.collectionText}>
            Image ID: <span className={styles.collectionId}>fQSunHvl8</span> was
            added to Favourites
          </p>
          <img src={smallLike} alt="" className={styles.collectionIcon} />
        </li>
        <li className={styles.collectionItem}>
          <time className={styles.collectionTime}>22:35</time>
          <p className={styles.collectionText}>
            Image ID: <span className={styles.collectionId}>fQSunHvl8</span> was
            added to Favourites
          </p>
          <img src={smallLike} alt="" className={styles.collectionIcon} />
        </li>
        <li className={styles.collectionItem}>
          <time className={styles.collectionTime}>22:35</time>
          <p className={styles.collectionText}>
            Image ID: <span className={styles.collectionId}>fQSunHvl8</span> was
            added to Favourites
          </p>
          <img src={smallLike} alt="" className={styles.collectionIcon} />
        </li>
      </ul>
    </section>
  );
};

export default VotingView;
