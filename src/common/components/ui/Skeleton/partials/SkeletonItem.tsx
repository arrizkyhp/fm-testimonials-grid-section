import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '~/styles/Card.module.scss';

const SkeletonItem = ({ keyItem }: any) => {
  return (
    <div key={keyItem} className={`${styles.card} ${styles.loader}`}>
      <div className={styles.header}>
        <div>
          <Skeleton
            circle
            height="40px"
            width="40px"
            containerClassName="avatar-skeleton"
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.name}>
            <Skeleton width={120} />
          </h1>
          <p className={styles.occupation}>
            <Skeleton width={70} />
          </p>
        </div>
      </div>
      <Skeleton />
      <Skeleton width={200} />
      <p className={styles.testimonial}>
        <Skeleton count={4} />
      </p>
    </div>
  );
};

export { SkeletonItem };
