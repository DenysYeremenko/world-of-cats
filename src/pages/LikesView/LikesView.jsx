import { BreedsGallery } from 'components/BreedsGallery/BreedsGallery';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { useSelector } from 'react-redux';
import { getLikesImages } from 'redux/votingView/selectors';

export const LikesView = props => {
  const likesImages = useSelector(getLikesImages);

  return (
    <section>
      <CategoryTitle categoryName='likes' />
      <BreedsGallery data={likesImages} />
    </section>
  );
};
