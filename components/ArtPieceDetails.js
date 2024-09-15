
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';
import Comments from './Comments';
import CommentForm from './CommentForm';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ArtImage = styled(Image)`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
`;

const Info = styled.div`
  margin-bottom: 2rem;
`;

const ColorPalette = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 5px;
`;

const ColorSwatch = styled.div`
  background-color: ${({ color }) => color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

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
    <Container>
      <BackLink href="/art-pieces">Back to List</BackLink>
      <ImageWrapper>
        <ArtImage src={imageSource} alt={title} width={600} height={600} />
      </ImageWrapper>
      <Info>
        <h1>{title}</h1>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
      </Info>
      <h2>Color Palette</h2>
      <ColorPalette>
        {colors.map((color, index) => (
          <ColorSwatch key={index} color={color} />
        ))}
      </ColorPalette>
      <h2>Comments</h2>
      <Comments comments={comments} />
      <CommentForm onSubmitComment={onSubmitComment} />
    </Container>
  );
}
