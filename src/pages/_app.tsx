import { QueryClientProvider } from '@tanstack/react-query';

import '~/styles/globals.scss';
import type { AppProps } from 'next/app';
import { queryClient } from 'src/common/config/query-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
