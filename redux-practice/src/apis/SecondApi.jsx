import { axiosRequest } from "../Helper";

export const SecondDataApi = async () => {
  return await axiosRequest("GET", `https://dummyjson.com/product/categories`);
};
