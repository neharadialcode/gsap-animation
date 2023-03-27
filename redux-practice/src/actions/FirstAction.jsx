import { FirstLoginApi } from "../apis/FirstApi";
export const FIRST_ACTION_DATA = "FIRST_ACTION_DATA";

export const FirstApiAction = (data) => ({
  type: FIRST_ACTION_DATA,
  data,
});
export const FirstApiActionList = (data) => async (dispatch) => {
  try {
    const response = await FirstLoginApi();
    dispatch(FirstApiAction(response));
  } catch (error) {}
};
