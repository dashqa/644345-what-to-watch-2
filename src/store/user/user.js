import {ActionTypes} from "@store/user/action-types";

const initialState = {
  isAuthorized: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_IS_AUTHORIZED:
      return Object.assign({}, state, {
        isAuthorized: action.payload,
      });
  }

  return state;
};
