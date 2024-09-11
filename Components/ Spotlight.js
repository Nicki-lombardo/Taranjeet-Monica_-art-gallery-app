import Image from 'next/image';
import FavoriteButton from './FavoriteButton';


export default function Spotlight({ artPiece, isFavorite, onToggleFavorite }) {
  if (!artPiece) {
    return <div>No Spotlight Available for now! 😞</div>;
  }

  const { imageSource, title, artist } = artPiece;

  return (
    <div>
      <Image src={imageSource} 
      alt={title} 
      width={800} 
      height={600} 
      />
      
      <h1>{title}</h1>
      <p>{artist}</p>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
