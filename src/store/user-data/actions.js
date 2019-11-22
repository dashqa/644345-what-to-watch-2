import * as actionType from "./types";

export const authorizeUser = (formData) => (dispatch, _, api) => {
  return api.post(`/login`, formData)
    .then(({data}) => {
      dispatch(setUser(data));
    })
    .catch((error) => {
      throw new Error(`${error} on loading movies`);
    });
};

export const setUser = (user) => {
  return {
    type: actionType.SET_USER,
    payload: user
  };
};
