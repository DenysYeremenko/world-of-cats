import { PaginationButtons } from 'components/PaginationButtons/PaginationButtons';
import {
  MasonryGalleryType1,
  MasonryGalleryType2,
} from 'components/MasonryGallery/MasonryGallery';
import { useGetBreedsQuery } from 'services/catApi';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export const BreedsGallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { data, isFetching } = useGetBreedsQuery(params, {
    skip: !params.limit,
  });

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
          {Number(params.limit) > 5 && (
            <MasonryGalleryType2 galleryArray={gallery10} />
          )}
          {data.length > 10 && <MasonryGalleryType1 galleryArray={gallery15} />}
          {data.length > 15 && <MasonryGalleryType2 galleryArray={gallery20} />}
          <PaginationButtons
            setSearchParams={setSearchParams}
            params={params}
          />
        </>
      )}
    </>
  );
};
