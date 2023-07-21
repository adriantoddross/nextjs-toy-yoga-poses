import { MockedProvider as MockedProviderBroken } from "@apollo/client/testing";
import { fireEvent, render } from "@testing-library/react";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";
import GET_FAVORITE_POSES from "lib/gql/queryDefs/getFavoritePoses";
import GET_POSES from "lib/gql/queryDefs/getPoses";
import Home from "../pages";

const MockedProvider = MockedProviderBroken as any;

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
      variables: {
        exerciseIds: []
      }
    },
    result: {
      data: {
        poses: [
          {
            "id": 3,
            "title": "War. War never changes. Neither does the classic Warrior One pose!",
            "subtitle": "Woman demonstrating warrior pose",
            "image_url": "https://t20598560.p.clickup-attachments.com/t20598560/1ec3560e-0f56-409d-848f-54325e5e5be7/DownwardFacingDogAdhoMukahSvanasana_annotated2-918a8568b3af49d2add6d1949797a20f.webp",
            "__typename": "poses"
        },
        {
            "id": 2,
            "title": "Get sturdy with the Mountain pose!",
            "subtitle": "Woman standing up straight with arms at side and palms facing inner-thighs",
            "image_url": "https://res.cloudinary.com/dyyp5mhcx/image/upload/v1686001238/Verywell-01-3567198-WarriorOne-acb9d35e634e4f548c2d251e9c739c74_1_tco3sx.webp",
            "__typename": "poses"
        },
        {
          "id": 1,
          "title": "Downward Dog",
          "subtitle": "Adho Mukha Svanasana",
          "image_url": "https://res.cloudinary.com/dyyp5mhcx/image/upload/v1686001240/DownwardFacingDogAdhoMukahSvanasana_annotated2-918a8568b3af49d2add6d1949797a20f_1_j3t2br.webp",
          "__typename": "poses"
      },
        ],
      },
    },
  },
  {
    request: {
      query: GET_FAVORITE_POSES,
      variable: {
        user_id: null
      }
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

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

describe("Yoga app", () => {
  it("filters yoga poses", async () => {
    const page = render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );

    await page.findByText("Filters");
    await page.findByText("Downward Dog"); // running pose

    const runningCheckbox = page.getByTestId("checkbox-running");
    // const swimmingCheckbox = page.getByTestId("checkbox-swimming");
    // const climbingCheckbox = page.getByTestId("checkbox-climbing");

    // fireEvent(
    //   runningCheckbox,
    //   new MouseEvent('click', {
    //     bubbles: true,
    //     cancelable: true,
    //   }),
    // )

    fireEvent.change(runningCheckbox, { target: { checked: false } });

    expect(page.getByText("Downward Dog")).toBeNull(); // this pose should be filtered out
  });
});
