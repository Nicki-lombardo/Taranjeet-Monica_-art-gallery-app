import { useState, useEffect } from 'react';
import Spotlight from '../components/Spotlight';

export default function SpotlightPage({ pieces }) {
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    if (pieces && pieces.length > 0) {
      const randomIndex = Math.floor(Math.random() * pieces.length);
      setSpotlightPiece(pieces[randomIndex]);
    }
  }, [pieces]);

  if (!spotlightPiece) {
    return <div>Loading...</div>;
  }

  return <Spotlight image={spotlightPiece.image} artist={spotlightPiece.artist} />;
}
