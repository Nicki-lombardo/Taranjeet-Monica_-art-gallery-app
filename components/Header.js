
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary}; 
  color: white; 
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  font-size: 2rem; 
  margin: 0;
  color: ${({ theme }) => theme.colors.text}; 
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.secondary}; 
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <HeaderTitle>Art Gallery</HeaderTitle>
      </Link>
    </HeaderContainer>
  );
}
