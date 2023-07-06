import { useRouter } from "next/router";
import Layout from "components/Layout";
import PoseCard from "components/PoseCard";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { query } = router;
  const { pathname: previousURL } = query;

  const selectedPose = JSON.parse(query.pose as string);

  console.log(query.pathname);

  return (
    <div>
      <Layout>
        <div className="px-4 sm:px-6 lg:px-8">
          <PoseCard pose={selectedPose} />
          <div className="mt-4">
            <Link
              href={previousURL as string}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
