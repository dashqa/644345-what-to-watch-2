import {ActionTypes} from "@store/movies-data/action-types";
import {getAdaptedMovie, getAdaptedMovies} from "@api/utils";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL} from "@constants";

const initialState = {
  movies: [],
  promoMovie: {},
  activeFilter: DEFAULT_FILTER,
  moviesCounter: MOVIES_COUNTER_INITIAL,
};

export const reducer = (state = initialState, action) => {
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
  }

  return state;
};
