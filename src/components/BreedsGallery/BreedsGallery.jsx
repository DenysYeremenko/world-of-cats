import { PaginationButtons } from 'components/PaginationButtons/PaginationButtons';

import {
  MasonryGalleryType1,
  MasonryGalleryType2,
} from 'components/MasonryGallery/MasonryGallery';

export const BreedsGallery = ({
  breedsState,
  setSearchParams,
  page,
  limit,
  order,
}) => {
  const gallery5 =
    breedsState && breedsState.filter((breed, index) => index <= 4);
  const gallery10 =
    breedsState &&
    breedsState.filter((breed, index) => index > 4 && index <= 9);
  const gallery15 =
    breedsState &&
    breedsState.filter((breed, index) => index > 9 && index <= 14);
  const gallery20 =
    breedsState &&
    breedsState.filter((breed, index) => index > 14 && index <= 19);

  return (
    breedsState && (
      <>
        <MasonryGalleryType1 galleryArray={gallery5} />
        {limit > 5 && <MasonryGalleryType2 galleryArray={gallery10} />}

        {breedsState.length > 10 && (
          <MasonryGalleryType1 galleryArray={gallery15} />
        )}
        {breedsState.length > 15 && (
          <MasonryGalleryType2 galleryArray={gallery20} />
        )}
        <PaginationButtons
          setSearchParams={setSearchParams}
          page={page}
          limit={limit}
          order={order}
        />
      </>
    )
  );
};
