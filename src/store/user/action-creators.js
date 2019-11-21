import {ActionTypes} from "@store/user/action-types";

export const setIsAuthorized = (isAuthorized) => {
  return {
    type: ActionTypes.SET_IS_AUTHORIZED,
    payload: isAuthorized
  };
};

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user
  };
};
