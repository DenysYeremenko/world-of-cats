import styles from './Loader.module.scss';

export const Loader = props => {
  return (
    <div className={styles.loaderWrap}>
      <div className={styles.loader}></div>
    </div>
  );
};
