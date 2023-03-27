import Axios from "axios";

export async function axiosRequest(method, url, data = null) {
  try {
    let response = await Axios({
      method: method,
      url: `${url}`,
      data: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response.data;
  } catch (error) {
    return error;
  }
}
