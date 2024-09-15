import ArtPieces from "../components/ArtPieces";
import styled from 'styled-components';

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #666;
  margin-top: 2rem;
`;

export default function FavoritesPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favoritePieces = artPieces.filter(
    (piece) => artPiecesInfo[piece.slug]?.isFavorite
  );

  return (
    <div>
      <h1>Favorites</h1>

      {favoritePieces.length === 0 ? (
        <EmptyMessage>
         You haven&apos;t added any favorite art pieces yet. Please add some to your favorites!
        </EmptyMessage>
      ) : (
        <ArtPieces
          pieces={favoritePieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </div>
  );
}
