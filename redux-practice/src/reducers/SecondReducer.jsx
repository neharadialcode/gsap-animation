import { SECOND_ACTION_DATA } from "../actions/SecondGetAction";

const initialState = {
  data: {},
};

const SecondReducerCase = (state = initialState, action) => {
  switch (action.type) {
    case SECOND_ACTION_DATA:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};
export default SecondReducerCase;
