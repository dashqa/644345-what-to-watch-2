import * as actionType from "./types";
import {getAdaptedUser} from "@api/utils";

const initialState = {
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return Object.assign({}, state, {
        user: getAdaptedUser(action.payload),
      });

    case actionType.RESET_USER:
      return Object.assign({}, state, {
        user: initialState.user,
      });
  }

  return state;
};
