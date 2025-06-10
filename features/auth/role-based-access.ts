import { redirect, unauthorized } from "next/navigation";

import { Role } from "@my-monorepo/shared-types";

import { auth } from "./auth";

export default async function roleBasedAccess(role: Role) {
  const session = await auth();
  if (!session?.user) {
    redirect("/patients/login");
  }
  if (!(session?.user.role != role)) {
    unauthorized();
  }
  //   if (role == Role.Pro && session.user.role == Role.Pro) {
  //     redirect("/doctor/dashboard");
  //   }
  //   if (role == Role.Patient && session.user.role == Role.Pro) {
  //     redirect("/patients/dashboard");
  //   }
}
