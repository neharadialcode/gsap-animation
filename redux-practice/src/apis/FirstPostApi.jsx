import { axiosRequest } from "../Helper";

export const FirstpostAPI = async (data) => {
  return await axiosRequest("POST", `https://fakestoreapi.com/carts`, data);
};
