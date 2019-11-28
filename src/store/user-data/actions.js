import * as actionType from "./types";

export const Url = {
  LOGIN: `/login`,
};

export const authorizeUser = (formData) => (dispatch, _, api) => {
  return api.post(Url.LOGIN, formData)
    .then(({data}) => {
      dispatch(setUser(data));
      return data;
    })
    .catch((error) => {
      throw new Error(`${error} on sign in`);
    });
};

export const setUser = (user) => {
  return {
    type: actionType.SET_USER,
    payload: user
  };
};

export const resetUser = () => {
  return {
    type: actionType.RESET_USER,
  };
};
