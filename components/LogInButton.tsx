import { HeartIcon } from "@heroicons/react/24/outline";

export default function LogInButton() {
  return (
    <a
      href="/api/auth/login"
      className="absolute top-2 left-2 focus:outline-none"
    >
      <span className="sr-only">Log in to favorite a pose</span>
      <HeartIcon className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
