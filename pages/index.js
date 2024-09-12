import { pickRandomPiece } from "../utils/pickRandomPiece";
import Spotlight from "@/Components/Spotlight.js/ Spotlight";

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
