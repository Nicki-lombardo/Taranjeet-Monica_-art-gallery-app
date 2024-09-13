import ArtPiecePreview from "./ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug} // piece.id  why slug?
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
