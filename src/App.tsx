import React from 'react';
import { useQuery } from 'react-query';

import type { Gist } from './fetcher';
import { fetchGists } from './fetcher';

function App() {
  const { isLoading, isError, data, error } = useQuery<Gist[], any>('gists', fetchGists);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {(data ?? []).map((gist) => (
        <li key={gist.html_url}>
          <a href={gist.html_url}>
            {gist.owner.login}: {gist.description}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default App;
