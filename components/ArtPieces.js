
import styled from 'styled-components';
import ArtPiecePreview from './ArtPiecePreview/ArtPiecePreview';

const ArtPiecesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem; 
  padding: 1rem;
  justify-items: center; 
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ArtPiecesContainer>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          imageSource={piece.imageSource}
          title={piece.title}
          artist={piece.artist}
          slug={piece.slug}
          isFavorite={artPiecesInfo[piece.slug]?.isFavorite || false}
          onToggleFavorite={() => onToggleFavorite(piece.slug)}
        />
      ))}
    </ArtPiecesContainer>
  );
}
