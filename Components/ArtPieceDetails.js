import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';

export default function ArtPieceDetails({ image, title, artist, year, genre, isFavorite, onToggleFavorite }) {
  return (
    <div>
      <Link href="/art-pieces">
        Back to List
      </Link>
      <Image src={image} alt={title} width={600} height={600} />
      <h1>{title}</h1>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <FavoriteButton isFavorite={isFavorite} 
      onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
