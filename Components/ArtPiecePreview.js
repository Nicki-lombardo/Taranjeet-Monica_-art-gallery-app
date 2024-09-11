import FavoriteButton from './FavoriteButton';
import Link from 'next/link';
import Image from 'next/image';


export default function ArtPiecePreview({ image, title, artist, slug, isFavorite, onToggleFavorite }) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={200} height={200} />
        <h2>{title}</h2>
        <p>{artist}</p>
      </Link>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
