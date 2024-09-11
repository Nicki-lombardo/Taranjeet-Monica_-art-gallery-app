import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter(); 
  const currentPath = router.pathname; 

  return (
    <nav>
      <ul>
        <li>
          <Link href="/spotlight">Spotlight</Link>
        </li>
        <li>
          {currentPath !== '/art-pieces' && (
            <Link href="/art-pieces">Art Pieces</Link>
          )}
        </li>
        <li>
          {currentPath !== '/favorites' && (
            <Link href="/favorites">Favorites</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
