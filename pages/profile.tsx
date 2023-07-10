import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "@apollo/client";

import Layout from "components/Layout";
import GET_FAVORITE_POSES from "lib/gql/queryDefs/getFavoritePoses";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user, error, isLoading } = useUser();

  const { data: favoritePoses } = useQuery(GET_FAVORITE_POSES, {
    variables: { user_id: user?.sub },
    skip: !user,
  });

  // Query poses using pose_ids from favoritePoses
  // Create new query in GraphiQL?
  // Render results below
  // Display placeholder message if there are no results

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <Layout showFilters={false}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div>
          {user ? (
            <div>
              <p>
                Soon, you'll be able to save searches and save your favorite
                yoga poses!
              </p>
              <p>This feature is still under development and coming soon.</p>
            </div>
          ) : (
            <div>
              <p>Please login to view this page.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
