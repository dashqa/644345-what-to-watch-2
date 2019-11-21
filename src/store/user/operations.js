import {setUser} from "@store/user/action-creators";

export const authorizeUser = (formData) => (dispatch, _, api) => {
  return api.post(`/login`, formData)
    .then(({data}) => {
      dispatch(setUser(data));
    })
    .catch((error) => {
      throw new Error(`${error} on loading movies`);
    });
};
