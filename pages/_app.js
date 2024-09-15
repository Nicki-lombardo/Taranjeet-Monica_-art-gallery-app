
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import GlobalStyles from "@/styles";
import { theme } from '../components/theme';
import { ThemeProvider } from "styled-components";

const fetcher = (url) => fetch(url).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: {} }
  );

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

  if (error) return <div>Failed to load art pieces.</div>;
  if (!artPieces) return <div>Loading art pieces...</div>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          artPieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={toggleFavorite}
          onAddComment={addComment}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
