import { render } from "@testing-library/react";
import Example from "../pages";
import gql from "graphql-tag";

jest.mock("../lib/gql/queryDefs/getExercises", () => ({
  GET_EXERCISES: () => gql`
    query Get_Exercises {
      exercise {
        id
        title
      }
    }
  `,
}));

jest.mock("../lib/gql/queryDefs/getPoses", () => ({
  GET_POSES: () => gql`
    query GET_POSES($exerciseIds: [bigint!]) {
      poses(where: { exercise: { _in: $exerciseIds } }) {
        id
        title
        subtitle
        image_url
      }
    }
  `,
}));

describe("Yoga app", () => {
  it("filters yoga poses", async () => {
    const page = render(<Example />);

    expect(page.getByText("Filters")).toBeInTheDocument();
  });
});
