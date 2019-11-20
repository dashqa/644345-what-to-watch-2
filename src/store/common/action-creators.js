import {ActionTypes} from "@store/common/action-types";

export const setFetchingMovies = (isLoaded) => {
  return {
    type: ActionTypes.SET_FETCHING_MOVIES,
    payload: isLoaded
  };
};

export const setFetchingPromo = (isLoaded) => {
  return {
    type: ActionTypes.SET_FETCHING_PROMO,
    payload: isLoaded
  };
};
