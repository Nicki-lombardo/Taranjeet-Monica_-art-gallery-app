import { useState } from 'react';
import Navigation from '@/Components/Navigation';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);

  if (error) return <div>Something is wrong. Please Wait!!</div>;
  if (!artPieces) return <div>Loading...</div>;

  return (
    <>
      <Navigation />
      <Component {...pageProps} artPieces={artPieces} />
    </>
  );
}

export default MyApp;
