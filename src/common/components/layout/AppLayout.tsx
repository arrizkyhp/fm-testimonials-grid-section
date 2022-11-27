import { ChildProps } from '~/models/types';

import { MainLayout } from './MainLayout';

const AppLayout = ({ children }: ChildProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export { AppLayout };
