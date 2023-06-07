import YogaPoses from "components/yogaPoses";
import { useUser } from "@auth0/nextjs-auth0/client";
import { gql, useQuery } from "@apollo/client";

export default function Home() {
  const { user, error, isLoading } = useUser();

  const GET_POSES = gql`
    query GetPoses {
      poses {
        id
        created_at
        image
        subtitle
        title
        difficulty
      }
    }
  `;

  const { loading, error: QueryError, data } = useQuery(GET_POSES);

  if (isLoading) return <div>Loading...</div>;

  if (error || QueryError)
    return <div>{error.message || QueryError.message}</div>;

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Yoga Poses
            </h1>
            <p>View random yoga poses with the click of a button</p>
            <div>
              {user ? (
                <a href="/api/auth/logout">Logout</a>
              ) : (
                <a href="/api/auth/login">Login</a>
              )}
            </div>
            <div>
              {user && (
                <div>
                  <img src={user.picture} alt={user.name} />
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              )}
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">
                {data.poses &&
                  data.poses.map(({ title }) => <div>{title}</div>)}
                {/* <YogaPoses /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
