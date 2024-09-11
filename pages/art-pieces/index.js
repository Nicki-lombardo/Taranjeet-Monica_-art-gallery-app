import ArtPieces from "@/Components/ArtPieces";

export default function ArtPiecesPage({ artPieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ArtPieces
      pieces={artPieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
