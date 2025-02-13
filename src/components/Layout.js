import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
  ];

  return (
    <div>
      <nav className="bg-gray-800 p-4 ">
        <div className="container mx-auto flex space-x-4">
          {routes.map(route => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-white hover:bg-gray-700 px-3 py-2 rounded ${
                router.pathname === route.path ? 'bg-gray-900 active:bg-gray-900' : ''
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}


