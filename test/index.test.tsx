import { render } from "@testing-library/react";
import Home from "../pages";
import { MockedProvider as MockedProviderBroken } from "@apollo/client/testing";
// import { gql } from "@apollo/client";
// import { UserProvider } from "@auth0/nextjs-auth0/client";
// import { Exercise } from "lib/typeDefs/types";

const MockedProvider = MockedProviderBroken as any;

const apolloClient = jest.requireActual("@apollo/client");

jest.mock("@apollo/client", () => ({
  ...apolloClient,
  useQuery: (queryName: string, variables: { exerciseIds?: number[] }) => {
    if (variables.exerciseIds) {
      return {
        data: [
          {
            id: 1,
            title: "running",
            __typename: "exercise",
          },
        ],
      };
    } else {
      return {
        data: [
          {
            id: 3,
            title:
              "War. War never changes. Neither does the classic Warrior One pose!",
            subtitle: "Woman demonstrating warrior pose",
            image_url:
              "https://t20598560.p.clickup-attachments.com/t20598560/1ec3560e-0f56-409d-848f-54325e5e5be7/DownwardFacingDogAdhoMukahSvanasana_annotated2-918a8568b3af49d2add6d1949797a20f.webp",
            __typename: "poses",
          },
        ],
      };
    }
  },
}));

jest.mock("@auth0/nextjs-auth0/client", () => ({
  UserProvider: ({ children }) => "<div>{children}</div>",
  useUser: () => ({
    user: {
      name: "adrienne",
      image_url: "www.something.com/123",
      email: "aross@thoughtbot.com",
    },
    error: null,
    isLoading: false,
  }),
}));

describe("Yoga app", () => {
  it("filters yoga poses", async () => {
    const page = render(
      <MockedProvider mocks={[]}>
        <Home />
      </MockedProvider>
    );

    // expect(page.getByText("Filters")).toBeInTheDocument();
    await page.findByText("Filters");
    expect(page).toMatchSnapshot();
  });
});
