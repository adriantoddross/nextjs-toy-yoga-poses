import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";
import "../globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import FilterPosesContextWrapper from "context/FilterContext";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <FilterPosesContextWrapper>
          <Component {...pageProps} />
        </FilterPosesContextWrapper>
      </ApolloProvider>
    </UserProvider>
  );
}
