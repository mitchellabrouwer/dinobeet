import { render, screen } from "@testing-library/react";
import Home from "../pages";

test("displays login button", async () => {
  // ARRANGE
  render(<Home />);

  // ACT & ASSERT
  screen.getByText(/Log in/i);
});
