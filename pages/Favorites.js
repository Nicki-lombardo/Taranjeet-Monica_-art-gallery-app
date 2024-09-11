import ArtPieces from '../components/ArtPieces';
import { useArtPiecesInfo } from '../context/ArtPiecesContext'; // Assuming you have a global state for art pieces info

export default function FavoritesPage() {
  const { artPiecesInfo } = useArtPiecesInfo();

  
  const favoritePieces = artPiecesInfo.filter(piece => piece.isFavorite);

  return (
    <div>
      <h1>Favorites</h1>
      <ArtPieces pieces={favoritePieces} />
    </div>
  );
}
