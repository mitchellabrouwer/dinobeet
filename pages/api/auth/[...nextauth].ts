import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import prisma from "../../../lib/prisma";

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: true,
  adapter: PrismaAdapter(prisma),

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/signin-verification", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    session: async ({ session, user }) => {
      session.user.image = user.image;
      session.user.name = user.name;
      session.user.id = user.id;
      session.user.paid = user.paid;
      return Promise.resolve(session);
    },
  },
});
