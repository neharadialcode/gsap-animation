import { SecondDataApi } from "../apis/SecondApi";

export const SECOND_ACTION_DATA = "SECOND_ACTION_DATA";

export const SecondApiAction = (data) => ({
  type: SECOND_ACTION_DATA,
  data,
});
export const SecondApiActionList = (data) => async (dispatch) => {
  try {
    const response = await SecondDataApi();
    console.log(response, "response");
    dispatch(SecondApiAction(response));
  } catch (error) {}
};
