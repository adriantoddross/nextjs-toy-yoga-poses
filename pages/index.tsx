import YogaPoses from "components/yogaPoses";
import Link from "next/link";
import Header from "components/header";
import { withApollo } from "../lib/withApollo";

const Home = () => {
  return <YogaPoses />;
};

export default withApollo({ ssr: true })(Home);
