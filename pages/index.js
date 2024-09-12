import { pickRandomPiece } from "../utils/pickRandomPiece";
import Spotlight from "@/components/Spotlight/ Spotlight";

export default function SpotlightPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const spotlightPiece = pickRandomPiece(artPieces);
  const isFavorite = artPiecesInfo[spotlightPiece.slug]?.isFavorite || false;

  return (
    <Spotlight
      artPiece={spotlightPiece}
      isFavorite={isFavorite}
      onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
    />
  );
}
