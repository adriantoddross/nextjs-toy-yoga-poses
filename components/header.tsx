import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Header() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <header className="bg-white shadow">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
        Yoga Poses
      </h1>
      <p>View random yoga poses with the click of a button</p>
      <div>
        {user ? (
          <ul>
            <li>
              <a href="/api/auth/logout">Logout</a>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}
      </div>
    </header>
  );
}
