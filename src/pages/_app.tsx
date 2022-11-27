import { QueryClientProvider } from '@tanstack/react-query';
import '~/styles/globals.scss';
import type { AppProps } from 'next/app';

import { queryClient } from 'src/common/config/query-client';
import { AppLayout } from '~/layout/.';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
