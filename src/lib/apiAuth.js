import api from "../utils/axiosInstance";

export const loginUser = (data) => {
  return api.post("/login", data);
};