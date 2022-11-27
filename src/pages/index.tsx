import type { NextPage } from 'next';

import { useTestimonials } from '~/hooks/.';
import styles from '~/styles/Home.module.scss';
import { Card } from '~/ui/Card';
import { Footer } from '~/ui/Footer';

const Home: NextPage = () => {
  const { responseDataTestimonial: data } = useTestimonials();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {data?.items?.map((item: any) => (
            <Card key={item.id} data={item} type={item?.type} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
