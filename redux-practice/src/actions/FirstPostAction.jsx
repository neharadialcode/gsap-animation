import { FirstpostAPI } from "../apis/FirstPostApi";
export const POST_LIST = "POST_LIST";

export const postCallActionList = (data) => async (dispatch) => {
  try {
    const response = await FirstpostAPI(data);
    dispatch(postCallAction(response));
  } catch (error) {}
};

export function postCallAction(data) {
  return {
    type: POST_LIST,
    data: data,
  };
}
