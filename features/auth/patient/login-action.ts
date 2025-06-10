"use server";

import { signIn } from "../auth";

export async function authenticate(formData: FormData) {
  return await signIn("credentials", formData);
}
