import React from 'react';
import { PaginationButtons } from 'components/PaginationButtons/PaginationButtons';
import {
  BasicMasonryGallery,
  AdvancedMasonryGallery,
} from 'components/MasonryGallery/MasonryGallery';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

export const BreedsGallery = ({ data, isFetching }) => {
  const location = useLocation();

  if (isFetching) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const gallery5 = data.slice(0, 5);
  const gallery10 = data.slice(5, 10);
  const gallery15 = data.slice(10, 15);
  const gallery20 = data.slice(15, 20);

  const shouldRenderPagination = location.pathname.includes('breeds');

  return (
    <>
      <BasicMasonryGallery galleryData={gallery5} />
      {data.length > 5 && <AdvancedMasonryGallery galleryData={gallery10} />}
      {data.length > 10 && <BasicMasonryGallery galleryData={gallery15} />}
      {data.length > 15 && <AdvancedMasonryGallery galleryData={gallery20} />}
      {shouldRenderPagination && <PaginationButtons />}
    </>
  );
};