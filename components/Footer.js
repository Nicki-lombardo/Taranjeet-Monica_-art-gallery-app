import styled from 'styled-components';
import Link from 'next/link';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 1000;
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const FooterItem = styled.li`
  margin: 0 1rem;
  font-size: 1.2rem;

  a {
    color: white;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterList>
        <FooterItem>
          <Link href="/">Spotlight</Link>
        </FooterItem>
        <FooterItem>
          <Link href="/art-pieces">Art Pieces</Link>
        </FooterItem>
        <FooterItem>
          <Link href="/favorites">Favorites</Link>
        </FooterItem>
      </FooterList>
    </FooterWrapper>
  );
}
