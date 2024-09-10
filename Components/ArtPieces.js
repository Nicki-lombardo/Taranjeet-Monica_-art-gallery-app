import ArtPiecePreview from './ArtPiecePreview';

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} image={piece.image} title={piece.title} artist={piece.artist} />
      ))}
    </div>
  );
}
