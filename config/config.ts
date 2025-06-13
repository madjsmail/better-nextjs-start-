export const AppConfig = {
  apiBaseUrl: process.env.BASEURL ?? "http://localhost:3000/api/v1",
};

export const ApiRoutes = {
  login: `/auth/login`,
  doctor: `/doctor`,
  user: `/user`,
  review: `/review`,

  specializationUsers: (userId: string) =>
    `${AppConfig.apiBaseUrl}/specialization/${userId}/users`,
};
