import { useRouter } from 'next/router';
import ArtPieceDetails from '@/Components/ArtPieceDetails';

export default function ArtPiecePage({ artPieces, artPiecesInfo, onToggleFavorite, onAddComment }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || !artPieces) return <div>Loading...</div>;

  const artPiece = artPieces.find((piece) => piece.slug === slug);
  const pieceInfo = artPiecesInfo[slug] || {};
  const isFavorite = pieceInfo.isFavorite || false;
  const comments = pieceInfo.comments || [];

  const handleToggleFavorite = () => {
    onToggleFavorite(slug);
  };

  const handleAddComment = (comment) => {
    onAddComment(slug, comment);
  };

  return (
    <ArtPieceDetails
      image={artPiece.image}
      title={artPiece.title}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      isFavorite={isFavorite}
      onToggleFavorite={handleToggleFavorite}
      comments={comments}
      onSubmitComment={handleAddComment}
      colors={artPiece.colors}
    />
  );
}
