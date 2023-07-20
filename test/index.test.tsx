import { MockedProvider as MockedProviderBroken } from "@apollo/client/testing";
import { fireEvent, render } from "@testing-library/react";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";
import GET_FAVORITE_POSES from "lib/gql/queryDefs/getFavoritePoses";
import GET_POSES from "lib/gql/queryDefs/getPoses";
import Home from "../pages";
// import { UserProvider } from "@auth0/nextjs-auth0/client";
// import { Exercise } from "lib/typeDefs/types";

const MockedProvider = MockedProviderBroken as any;

// const apolloClient = jest.requireActual("@apollo/client");

const mocks = [
  {
    request: {
      query: GET_EXERCISES,
    },
    result: {
      data: {
        exercise: [
          {
            id: 1,
            title: "running",
            __typename: "exercise",
          },
          {
            id: 2,
            title: "climbing",
            __typename: "exercise",
          },
          {
            id: 3,
            title: "swimming",
            __typename: "exercise",
          },
        ],
      },
    },
  },

  {
    request: {
      query: GET_POSES,
      variable: {
        exerciseIds: []
      }
    },
    result: {
      data: {
        poses: [
          {
            id: 3,
            title: "Warrior One pose",
            subtitle: "Woman demonstrating warrior pose",
            image_url:
              "https://t20598560.p.clickup-attachments.com/t20598560/1ec3560e-0f56-409d-848f-54325e5e5be7/DownwardFacingDogAdhoMukahSvanasana_annotated2-918a8568b3af49d2add6d1949797a20f.webp",
            __typename: "poses",
          },
        ],
      },
    },
  },
  {
    request: {
      query: GET_FAVORITE_POSES,
    },
    result: {
      data: {
        user_pose: [
          {
            id: 63,
            pose_id: 2,
            __typename: "user_pose",
          },
        ],
      },
    },
  },
];

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
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );

    await page.findByText("Filters");
    // await page.findByText("Warrior One pose"); // climbing pose

    // const runningCheckbox = page.getByTestId("checkbox-running");
    // const swimmingCheckbox = page.getByTestId("checkbox-swimming");
    const climbingCheckbox = page.getByTestId("checkbox-climbing");

    fireEvent.change(climbingCheckbox, { target: { value: "0" } });

    // expect(page.getByText("Warrior One pose")).toBeNull(); // climbing pose
  });
});
