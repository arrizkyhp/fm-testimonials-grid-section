import Image from 'next/image';
import React from 'react';

import { CardType } from '~/enum/.';
import styles from '~/styles/Card.module.scss';
import { PatternQuotation } from '~/svg/PatternQuotation';

const Card = (props: any) => {
  const { type, data } = props;
  const styleCard = [styles.card];

  if (type === CardType.PRIMARY) styleCard.push(styles.primary);
  if (type === CardType.GREY) styleCard.push(styles.grey);
  if (type === CardType.DARK) styleCard.push(styles.dark);
  if (type === CardType.WHITE) styleCard.push(styles.white);

  return (
    <div className={styleCard.join(' ')}>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image
            src={data.imageUrl}
            alt="user profile"
            width="40px"
            height="40px"
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.name}>{data.name}</h1>
          <p className={styles.occupation}>{data.occupation}</p>
        </div>
      </div>
      <p className={styles.quote}>{data.title}</p>
      <p className={styles.testimonial}>{data.testimonial}</p>
      {type === CardType.PRIMARY ? (
        <div className="absolute right-28 top-0">
          <PatternQuotation />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export { Card };
