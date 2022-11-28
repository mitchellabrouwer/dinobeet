import { render, screen } from "@testing-library/react";
import Home from "../pages";

jest.mock("next-auth/react");
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("displays login button", async () => {
  // ARRANGE
  render(<Home />);

  // ACT & ASSERT
  screen.getByText(/Log in/i);
});
