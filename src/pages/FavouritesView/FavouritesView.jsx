import { BreedsGallery } from 'components/BreedsGallery/BreedsGallery';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { useSelector } from 'react-redux';
import { getFavouritesImages } from 'redux/votingView/selectors';

export const FavouritesView = props => {
  const favouritesImages = useSelector(getFavouritesImages);

  return (
    <section>
      <CategoryTitle categoryName='favourites' />
      <BreedsGallery data={favouritesImages} />
    </section>
  );
};
