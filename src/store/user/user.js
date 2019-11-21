import {ActionTypes} from "@store/user/action-types";

const initialState = {
  user: {},
  isAuthorized: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });

    case ActionTypes.SET_IS_AUTHORIZED:
      return Object.assign({}, state, {
        isAuthorized: action.payload,
      });
  }

  return state;
};
