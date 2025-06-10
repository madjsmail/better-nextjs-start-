import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "emilys",
            password: "emilyspass",
            expiresInMins: 30,
          }),
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Invalid credentials.");
        }

        // return user object with their profile data
        return res.json();
      },
    }),
  ],
});
