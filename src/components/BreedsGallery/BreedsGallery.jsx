import { PaginationButtons } from 'components/PaginationButtons/PaginationButtons';
import {
  MasonryGalleryType1,
  MasonryGalleryType2,
} from 'components/MasonryGallery/MasonryGallery';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

export const BreedsGallery = ({ data, isFetching }) => {
  const location = useLocation();

  const gallery5 = data && data.filter((breed, index) => index <= 4);
  const gallery10 =
    data && data.filter((breed, index) => index > 4 && index <= 9);
  const gallery15 =
    data && data.filter((breed, index) => index > 9 && index <= 14);
  const gallery20 =
    data && data.filter((breed, index) => index > 14 && index <= 19);

  return (
    <>
      {isFetching && <Loader />}
      {data && (
        <>
          <MasonryGalleryType1 galleryArray={gallery5} />
          {data.length > 5 && <MasonryGalleryType2 galleryArray={gallery10} />}
          {data.length > 10 && <MasonryGalleryType1 galleryArray={gallery15} />}
          {data.length > 15 && <MasonryGalleryType2 galleryArray={gallery20} />}
          {location.pathname.includes('breeds') && <PaginationButtons />}
        </>
      )}
    </>
  );
};
