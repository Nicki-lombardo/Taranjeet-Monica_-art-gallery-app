import { useRouter } from 'next/router';
import ArtPieceDetails from '../../components/ArtPieceDetails';

export default function ArtPiecePage({ artPieces, onToggleFavorite, favoriteSlugs }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = artPieces.find(piece => piece.slug === slug);

  if (!artPiece) return <div>Loading...</div>;

  const isFavorite = favoriteSlugs.includes(slug);

  return (
    <ArtPieceDetails
      image={artPiece.image}
      title={artPiece.title}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      isFavorite={isFavorite}
      onToggleFavorite={() => onToggleFavorite(slug)}
    />
  );
}
