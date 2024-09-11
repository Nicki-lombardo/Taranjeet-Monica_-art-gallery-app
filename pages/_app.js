import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import Navigation from '@/Components/Navigation';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);
  const [favorites, setFavorites] = useLocalStorageState('favorites', { defaultValue: [] });

  if (error) return <div>Failed to load</div>;
  if (!artPieces) return <div>Loading...</div>;

  const toggleFavorite = (slug) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(slug)
        ? prevFavorites.filter(fav => fav !== slug)
        : [...prevFavorites, slug]
    );
  };

  return (
    <>
      <Navigation />
      <Component
        {...pageProps}
        artPieces={artPieces}
        favoriteSlugs={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default MyApp;
