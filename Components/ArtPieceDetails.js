import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';
import Comments from './Comments';
import CommentForm from './CommentForm';

export default function ArtPieceDetails({
  imageSource,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  comments,
  onSubmitComment,
  colors,
}) {
  return (
    <div>
      <Link href="/art-pieces">
        <a>Back to List</a>
      </Link>
      <Image src={artPiece.imageSource} 
      alt={title} 
      width={600} 
      height={600} 
      />
      
      <h1>{title}</h1>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
      <h2>Color Palette</h2>
      <div style={{ display: 'flex' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              marginRight: '5px',
            }}
          ></div>
        ))}
      </div>
      <h2>Comments</h2>
      <Comments comments={comments} />
      <CommentForm onSubmitComment={onSubmitComment} />
    </div>
  );
}
