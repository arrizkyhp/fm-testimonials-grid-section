/* eslint-disable no-magic-numbers */
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { SkeletonItem } from './partials';

const SkeletonLoader = () => {
  const amount = Array.from(Array(5).keys());

  return (
    <SkeletonTheme
      baseColor="#f3f3f3"
      highlightColor="#ecebeb"
      borderRadius="0.5rem"
      duration={1}
    >
      {amount.map((item) => (
        <SkeletonItem keyItem={item} />
      ))}
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
