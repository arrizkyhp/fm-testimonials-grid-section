import type { NextPage } from 'next';

import { useTestimonials } from '~/hooks/.';
import styles from '~/styles/Home.module.scss';
import { Card } from '~/ui/Card';
import { Footer } from '~/ui/Footer';
import { SkeletonLoader } from '~/ui/Skeleton';

const Home: NextPage = () => {
  const { isLoading, responseDataTestimonial: data } = useTestimonials();

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.gridContainer} ${isLoading ? 'w-full' : ''}`}>
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            data?.items?.map((item: any) => (
              <Card key={item.id} data={item} type={item?.type} />
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
