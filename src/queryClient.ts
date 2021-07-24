import { QueryClient } from 'react-query';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';

export async function createQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        staleTime: 1000 * 60 * 60 * 24,
      },
    },
  });

  const localStoragePersistor = createWebStoragePersistor({
    storage: window.localStorage,
    throttleTime: 0,
  });

  await persistQueryClient({
    queryClient,
    persistor: localStoragePersistor,
  });
  return queryClient;
}
