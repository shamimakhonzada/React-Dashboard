import api from "./index";

export const getProfile = () => api.get("/users/me");
