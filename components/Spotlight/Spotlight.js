
import styled from 'styled-components';
import Image from 'next/image';
import FavoriteButton from '../FavoriteButton';

const SpotlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SpotlightTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Spotlight({ artPiece, 
  isFavorite, onToggleFavorite }) {
  if (!artPiece) {
    return <SpotlightContainer>No Spotlight Available 😞</SpotlightContainer>;
  }

  const { imageSource, title, artist } = artPiece;

  return (
    <SpotlightContainer>
      <Image src={imageSource} alt={title} width={800} height={600} />
      <SpotlightTitle>{title}</SpotlightTitle>
      <p>{artist}</p>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </SpotlightContainer>
  );
}
