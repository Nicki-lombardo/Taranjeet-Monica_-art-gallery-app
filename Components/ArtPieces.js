import ArtPiecePreview from './ArtPiecePreview';

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
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
    </div>
  );
}
