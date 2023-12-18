import styles from './VotingView.module.scss';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { useGetRandomImageQuery } from 'services/catApi';
import { addLike, addFavourite, addDislike } from 'redux/votingView/votingViewSlice';
import { useDispatch } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { VotingsHitoryList } from 'components/VotingsHitoryList/VotingsHitoryList';

const VotingView = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useGetRandomImageQuery();

  const handleVoting = e => {
    const buttonId = e.target.id;

    switch (buttonId) {
      case 'likeBtn':
        dispatch(addLike({ url: data.url, id: data.id }));
        
        break;
      case 'favouriteBtn':
        dispatch(addFavourite({ url: data.url, id: data.id }));
        
        break;
      case 'dislikeBtn':
        dispatch(addDislike({ url: data.url, id: data.id }));
        
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <CategoryTitle categoryName='voting' />
      <div className={styles.imgWrap}>
        {isFetching && <Loader />}
        {!isFetching && <img src={data && data.url} alt='cat' className={styles.catImage} />}
        <ul className={styles.buttonList}>
          <li className={styles.buttonItem}>
            <button className={styles.addButton} id='likeBtn' onClick={handleVoting}></button>
          </li>
          <li className={styles.buttonItem}>
            <button className={styles.addButton} id='favouriteBtn' onClick={handleVoting}></button>
          </li>
          <li className={styles.buttonItem}>
            <button className={styles.addButton} id='dislikeBtn' onClick={handleVoting}></button>
          </li>
        </ul>
      </div>
      <VotingsHitoryList />
    </section>
  );
};

export default VotingView;
