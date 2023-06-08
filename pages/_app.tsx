import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";
import "../globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps); // formerly pageProps.initialApolloState

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}
