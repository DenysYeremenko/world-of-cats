import styles from './SelectedBreedView.module.scss';
import { ImgPagination } from 'components/ImgPagination/ImgPagination';
import { useGetSelectedBreedQuery } from 'services/catApi';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryTitle } from 'components/CategoryTitle/CategoryTitle';
import { Loader } from 'components/Loader/Loader';

const SelectedBreedView = props => {
  const [imgUrl, setImgUrl] = useState(null);
  const { breedId } = useParams();
  const { data, isFetching } = useGetSelectedBreedQuery(breedId);

  const changeImage = url => {
    setImgUrl(url);
  };

  return (
    <section className={styles.selectedBreedWrap}>
      <CategoryTitle categoryName="breeds" />
      {isFetching && <Loader />}
      {data && (
        <div>
          <div className={styles.imgWrap}>
            <img
              src={imgUrl ? imgUrl : data.images[0]}
              alt={data.name}
              className={styles.breedImg}
            />
            <ImgPagination images={data.images} changeImage={changeImage} />
          </div>
          <div className={styles.descriptionContainer}>
            <h3 className={styles.descriptionTitle}>
              <span className={styles.titleSpan}>{data.breedInfo.name}</span>
            </h3>
            <p className={styles.descriptionCaption}>Family companion cat</p>
            <ul className={styles.descriptionList}>
              <li className={styles.descriptionItem}>
                <span className={styles.descriptionCategory}>Temperament:</span>
                {data.breedInfo.temperament}
              </li>
              <li className={styles.descriptionItem}>
                <span className={styles.descriptionCategory}>Origin: </span>
                {data.breedInfo.origin}
              </li>
              <li className={styles.descriptionItem}>
                <span className={styles.descriptionCategory}>Weight: </span>
                {data.breedInfo.metric} kgs
              </li>
              <li className={styles.descriptionItem}>
                <span className={styles.descriptionCategory}>Life span: </span>
                {data.breedInfo.life_span} years
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectedBreedView;
