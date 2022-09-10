import styles from './SelectedBreed.module.css';
import { ImgPagination } from 'components/ImgPagination/ImgPagination';
import { getSelectedBreed } from 'services/getCatAPI';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { getImagesBreed } from 'services/getCatAPI';

export const SelectedBreed = props => {
  const [imgUrl, setImgUrl] = useState(null);
  const [breedData, setBreedData] = useState(null);
  const [breedImages, setBreedImages] = useState([]);
  const location = useLocation();
  const locationBack = location.state?.from ?? '/';
  const { breedId } = useParams();

  useEffect(() => {
    const getBreedData = async () => {
      const newData = await getSelectedBreed(breedId);
      setBreedData(newData);
    };

    const getImages = async () => {
      const images = await getImagesBreed(breedId);
      setBreedImages(images);
      setImgUrl(images[0].url);
    };

    getImages();
    getBreedData();
  }, [breedId]);

  const changeImage = url => {
    setImgUrl(url);
  };

  return (
    breedData && (
      <div className={styles.selectedBreedWrap}>
        <CategoryTitle
          categoryName="breeds"
          breedId="28"
          location={locationBack}
        />
        <div className={styles.imgWrap}>
          <img src={imgUrl} alt="" className={styles.breedImg} />
          <ImgPagination images={breedImages} changeImage={changeImage} />
        </div>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.descriptionTitle}>
            {breedData.breedInfo.name}
          </h3>
          <p className={styles.descriptionCaption}>Family companion cat</p>
          <ul className={styles.descriptionList}>
            <li className={styles.descriptionItem}>
              <span className={styles.descriptionCategory}>Temperament: </span>
              {breedData.breedInfo.temperament}
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.descriptionCategory}>Origin: </span>
              {breedData.breedInfo.origin}
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.descriptionCategory}>Weight: </span>
              {breedData.breedInfo.weight.metric} kgs
            </li>
            <li className={styles.descriptionItem}>
              <span className={styles.descriptionCategory}>Life span: </span>
              {breedData.breedInfo.life_span} years
            </li>
          </ul>
        </div>
      </div>
    )
  );
};
