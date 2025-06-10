import { IUser } from "@my-monorepo/shared-types";
import "next-auth";

declare module "next-auth" {
  interface Session {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    user: IUser;
  }
}
