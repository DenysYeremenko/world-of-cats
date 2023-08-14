import { BreedsGallery } from 'components/BreedsGallery/BreedsGallery';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { useSelector } from 'react-redux';
import { getDislikesImages } from 'redux/selectors';

export const DislikesView = props => {
  const dislikeImages = useSelector(getDislikesImages);

  return (
    <section>
      <CategoryTitle categoryName="dislikes" />
      <BreedsGallery data={dislikeImages} />
    </section>
  );
};
