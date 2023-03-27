import { axiosRequest } from "../Helper";

export const FirstLoginApi = async () => {
  return await axiosRequest("GET", `https://dummyjson.com/product/1`);
};
