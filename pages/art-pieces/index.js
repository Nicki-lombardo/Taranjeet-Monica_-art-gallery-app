import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <ArtPieces
      pieces={artPieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
