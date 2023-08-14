import { useSelector } from 'react-redux';
import { getVotingsHistory } from 'redux/votingView/selectors';
import styles from './VotingsHitoryList.module.scss';
import likeIcon from './images/icons/like.svg';
import favouriteIcon from './images/icons/favourite.svg';
import dislikeIcon from './images/icons/dislike.svg';

export const VotingsHitoryList = props => {
  const votingsHistory = useSelector(getVotingsHistory);

  return (
    <ul className={styles.collectionList}>
      {votingsHistory.map(({ time, id, type }) => {
        const votingIcon = () => {
          switch (type) {
            case 'Likes':
              return likeIcon;
            case 'Favourites':
              return favouriteIcon;
            case 'Dislikes':
              return dislikeIcon;
            default:
              break;
          }
        };

        return (
          <li className={styles.collectionItem} key={id}>
            <time className={styles.collectionTime}>{time}</time>
            <p className={styles.collectionText}>
              Image ID: <span className={styles.collectionId}>{id} </span>
              was added to {type}
            </p>
            <img src={votingIcon()} alt='' className={styles.collectionIcon} />
          </li>
        );
      })}
    </ul>
  );
};
