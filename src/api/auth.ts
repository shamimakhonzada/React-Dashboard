import api from "./index";

export const login = (email: string, password: string) =>
  api.post("/auth/login", { email, password });

export const signup = (email: string, password: string) =>
  api.post("/auth/signup", { email, password });

export const logout = () => {
  localStorage.removeItem("token");
};
