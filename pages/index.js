import { pickRandomPiece } from '../utils/pickRandomPiece';
import Spotlight from '@/Components/ Spotlight';


export default function SpotlightPage({ artPieces }) {
  const spotlightPiece = pickRandomPiece(artPieces);

  return <Spotlight image={spotlightPiece.image} artist={spotlightPiece.artist} />;
}
