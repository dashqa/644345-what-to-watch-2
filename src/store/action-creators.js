import {ActionTypes} from "./action-types";
import {MOVIES_COUNTER_STEP} from "@constants";

export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies
  };
};

export const setPromoMovie = (movie) => {
  return {
    type: ActionTypes.SET_PROMO_MOVIE,
    payload: movie
  };
};

export const setActiveFilter = (genre) => {
  return {
    type: ActionTypes.SET_ACTIVE_FILTER,
    payload: genre
  };
};

export const increaseMoviesCounter = () => {
  return {
    type: ActionTypes.INCREASE_MOVIES_COUNTER,
    payload: MOVIES_COUNTER_STEP
  };
};

export const setIsAuthorized = (isAuthorized) => {
  return {
    type: ActionTypes.SET_IS_AUTHORIZED,
    payload: isAuthorized
  };
};

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
