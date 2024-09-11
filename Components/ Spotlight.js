import ArtPiecePreview from './ArtPiecePreview';

export default function Spotlight({ image, title, artist, slug, isFavorite, onToggleFavorite }) {
  return (
    <div>
      <h1>Spotlight</h1>
      <ArtPiecePreview
        image={image}
        title={title}
        artist={artist}
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
