
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from '../FavoriteButton';

const ArtPieceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
  max-width: 300px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const Artist = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export default function ArtPiecePreview({ imageSource, 
  title, artist, slug, isFavorite, onToggleFavorite }) {
  return (
    <ArtPieceContainer>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={imageSource} 
        alt={title} width={200} height={200} />
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </Link>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </ArtPieceContainer>
  );
}
