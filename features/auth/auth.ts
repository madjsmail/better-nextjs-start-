import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { ApiRoutes } from "@/config/config";
import { env } from "@/config/env/env";
import { customFetch } from "@/lib/top-layer-api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  cookies: {},

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // const res = await fetch(ApiRoutes.login, {

        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: credentials?.email,
        //     password: credentials?.password,
        //   }),
        // });

        // if (!res.ok) {
        //   let result = await res.json();
        //   return null;
        // }
        // return res.json();
        const res = await customFetch.POST(ApiRoutes.login, {
          body: {
            email: credentials?.email,
            password: credentials?.password,
          },
        });
        console.log({res});

        if (res.error) {
          return null;
        }
        return res.data;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token.user as any;
      session.tokens = token.tokens as any;

      return session;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },

    // async signIn({ user, account, profile, email, credentials }) {

    //   if (user?.error === "my custom error") {
    //     throw new Error("custom error to the client");
    //   }
    //   return true;
    // },
  },
  pages: {
    signIn: "/patients/login",
  },
  secret: env.NEXTAUTH_SECRET,
  trustHost: true,
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.debug(code, message);
    },
  },
});
