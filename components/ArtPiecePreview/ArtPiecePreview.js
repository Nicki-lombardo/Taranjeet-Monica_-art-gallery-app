import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from '../FavoriteButton';

export default function ArtPiecePreview({ imageSource, title, artist, slug, isFavorite, onToggleFavorite }) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
      <Image src={imageSource} 
      alt={title} 
      width={200} 
      height={200} 
      />
      
      <h2>{title}</h2>
        <p>{artist}</p>
      </Link>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
