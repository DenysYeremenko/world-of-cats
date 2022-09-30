import { BreedsGallery } from 'components/BreedsGallery/BreedsGallery';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { GalleryFilterBar } from 'components/GalleryFilterBar/GalleryFilterBar';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetRandomImagesQuery } from 'services/catApi';

const GalleryView = props => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  useEffect(() => {
    !params.limit &&
      setSearchParams({
        order: 'RAND',
        type: 'jpg,gif,png',
        breed: 'none',
        limit: 5,
      });
  }, [setSearchParams, params]);
  const { data, isFetching, refetch } = useGetRandomImagesQuery(params);

  return (
    <section>
      <CategoryTitle categoryName="gallery" location={'/'} />
      <GalleryFilterBar refetch={refetch} />
      {isFetching && <Loader />}
      {data && !isFetching && (
        <BreedsGallery data={data} isFetching={isFetching} />
      )}
    </section>
  );
};

export default GalleryView;
