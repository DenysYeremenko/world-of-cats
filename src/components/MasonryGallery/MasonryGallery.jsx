import React from 'react';
import styles from './MasonryGallery.module.scss';
import { MasonryGalleryItem } from './MasonryGalleryItem';

export const BasicMasonryGallery = ({ galleryData }) => {
  return (
    <div className={styles.gallery}>
      {galleryData.map((breed, index) => (
        <MasonryGalleryItem key={breed.id} breed={breed} index={index} isType1={true} />
      ))}
    </div>
  );
};

export const AdvancedMasonryGallery = ({ galleryData }) => {
  return (
    <div className={styles.gallery}>
      {galleryData.map((breed, index) => (
        <MasonryGalleryItem key={breed.id} breed={breed} index={index} isType1={false} />
      ))}
    </div>
  );
};
