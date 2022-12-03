/* eslint-disable global-require */
import { render, screen, waitFor } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Index from "../pages";
// import { RouterContext } from "next/dist/shared/lib/router-context";

// const useRouter = jest.spyOn(require("next/router"), "useRouter");

// jest.mock("next-auth/react");

// let useRouter;

// beforeEach(async () => {
//   useRouter = jest.spyOn(require("next/router"), "useRouter");
//   useRouter.mockImplementation(() => ({
//     route: "/",
//     pathname: "",
//     query: "",
//     asPath: "",
//     push: jest.fn(),
//     events: {
//       on: jest.fn(),
//       off: jest.fn(),
//     },
//     beforePopState: jest.fn(() => null),
//     prefetch: jest.fn(() => null),
//   }));
// });

afterEach(async () => {
  jest.clearAllMocks();
});

test("displays login button when session null", async () => {
  // ARRANGE
  render(
    <SessionProvider
      session={{
        expires: "1",
        user: { email: "a", name: "Delta", image: "c" },
      }}
    >
      <Index />
    </SessionProvider>
  );
  // ACT & ASSERT
  expect(useRouter().push).toHaveBeenCalledTimes(1);
  await waitFor(() => {
    screen.debug();
  });
  // expect(useRouter.push).toBeCalledTimes(1);
  // expect(screen.getByText(/Log in/i)).toBeInTheDocument();
});

xtest("displays log out button when session", async () => {
  // ARRANGE
  render(
    <SessionProvider
      session={{
        expires: "1",
        user: { email: "a", name: "Delta", image: "c" },
      }}
    >
      <Index />
    </SessionProvider>
  );

  // ACT & ASSERT
  await waitFor(() => {
    screen.debug();
    expect(useRouter.push()).toHaveBeenCalledTimes(1);
  });
});

// it("Show Log Out when has session", async () => {
//   const mockSession = {
//     expires: new Date(Date.now() + 2 * 86400).toISOString(),
//     user: { username: "admin" },
//   };
//   (useSession as jest.Mock).mockReturnValueOnce([mockSession, "authenticated"]);
//   // @ts-ignore
//   // useSession.mockReturnValue([mockSession, 'authenticated']);
//   render(<Header />);
//   expect(screen.getByText("LOG OUT")).toBeInTheDocument();
// });
