import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
if (!process.env.GOOGLE_ID || !process.env.GOOGLE_SECRET || !process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    throw new Error("The environment variables GOOGLE_ID, GOOGLE_SECRET, GITHUB_ID, and GITHUB_SECRET must be set.");
  }
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
