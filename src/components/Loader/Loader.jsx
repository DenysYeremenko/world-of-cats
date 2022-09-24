import styles from './Loader.module.css';

export const Loader = props => {
  return (
    <div className={styles.loaderWrap}>
      <div className={styles.loader}></div>
    </div>
  );
};
