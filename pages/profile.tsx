import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

import Layout from "components/Layout";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <Layout>
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
