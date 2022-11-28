import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      paid: boolean;
    } & Session.user;
  }

  interface User {
    paid: boolean & User;
  }
}
