export const AppConfig = {
  apiBaseUrl: process.env.BASEURL ?? "http://localhost:3000/api/v1",
};

export const ApiRoutes = {
  login: `${AppConfig.apiBaseUrl}/auth/login`,
  doctor: `${AppConfig.apiBaseUrl}/doctor`,
  user: `${AppConfig.apiBaseUrl}/user`,
  review: `${AppConfig.apiBaseUrl}/review`,

  specializationUsers: (userId: string) =>
    `${AppConfig.apiBaseUrl}/specialization/${userId}/users`,
};
