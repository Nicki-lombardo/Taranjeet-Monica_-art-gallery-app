
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
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

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link href="/">Spotlight</Link>
        </NavItem>
        <NavItem>
          <Link href="/art-pieces">Art Pieces</Link>
        </NavItem>
        <NavItem>
          <Link href="/favorites">Favorites</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}
