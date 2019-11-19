import {ActionTypes} from "./action-types";
import {getAdaptedMovies, getAdaptedMovie} from "@api/utils";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL} from "@constants";

export const initialState = {
  movies: [],
  promoMovie: {},
  activeFilter: DEFAULT_FILTER,
  moviesCounter: MOVIES_COUNTER_INITIAL,
  isAuthorized: false,
  isLoadingMovies: false,
  isLoadingPromo: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MOVIES:
      return Object.assign({}, state, {
        movies: getAdaptedMovies(action.payload),
      });

    case ActionTypes.SET_PROMO_MOVIE:
      return Object.assign({}, state, {
        promoMovie: getAdaptedMovie(action.payload),
      });

    case ActionTypes.SET_ACTIVE_FILTER:
      return Object.assign({}, state, {
        activeFilter: action.payload,
      });

    case ActionTypes.INCREASE_MOVIES_COUNTER:
      return Object.assign({}, state, {
        moviesCounter: state.moviesCounter + action.payload,
      });

    case ActionTypes.SET_IS_AUTHORIZED:
      return Object.assign({}, state, {
        isAuthorized: action.payload,
      });

    case ActionTypes.SET_FETCHING_MOVIES:
      return Object.assign({}, state, {
        isLoadingMovies: action.payload,
      });
    case ActionTypes.SET_FETCHING_PROMO:
      return Object.assign({}, state, {
        isLoadingPromo: action.payload,
      });
  }

  return state;
};
