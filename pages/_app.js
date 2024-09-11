import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import useSWR from 'swr';
import Navigation from '@/Components/Navigation';

const fetcher = (url) => fetch(url).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState('art-pieces-info', { defaultValue: {} });

  if (error) return <div>Failed to load</div>;
  if (!artPieces) return <div>Loading...</div>;

  const toggleFavorite = (slug) => {
    setArtPiecesInfo((prevInfo) => ({
      ...prevInfo,
      [slug]: {
        ...prevInfo[slug],
        isFavorite: !prevInfo[slug]?.isFavorite,
      },
    }));
  };

  const addComment = (slug, comment) => {
    setArtPiecesInfo((prevInfo) => {
      const prevComments = prevInfo[slug]?.comments || [];
      return {
        ...prevInfo,
        [slug]: {
          ...prevInfo[slug],
          comments: [...prevComments, comment],
        },
      };
    });
  };

  return (
    <>
      <Navigation />
      <Component
        {...pageProps}
        artPieces={artPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={toggleFavorite}
        onAddComment={addComment}
      />
    </>
  );
}

export default MyApp;
