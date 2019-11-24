import * as actionType from "./types";
import {getAdaptedMovie, getAdaptedMovies} from "@api/utils";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL} from "@constants";
import {replacePromo, replaceMovie} from "@utils";

const initialState = {
  movies: [],
  promoMovie: {},
  activeFilter: DEFAULT_FILTER,
  moviesCounter: MOVIES_COUNTER_INITIAL,
  favorite: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_MOVIES:
      return Object.assign({}, state, {
        movies: getAdaptedMovies(action.payload),
      });

    case actionType.UPDATE_MOVIE:
      const updatedMovie = getAdaptedMovie(action.payload);

      return Object.assign({}, state, {
        movies: replaceMovie(updatedMovie, state.movies),
        promoMovie: replacePromo(updatedMovie, state.promoMovie)
      });

    case actionType.SET_PROMO_MOVIE:
      return Object.assign({}, state, {
        promoMovie: getAdaptedMovie(action.payload),
      });

    case actionType.SET_ACTIVE_FILTER:
      return Object.assign({}, state, {
        activeFilter: action.payload,
      });

    case actionType.INCREASE_MOVIES_COUNTER:
      return Object.assign({}, state, {
        moviesCounter: state.moviesCounter + action.payload,
      });

    case actionType.SET_FAVORITE:
      return Object.assign({}, state, {
        favorite: getAdaptedMovies(action.payload),
      });
  }

  return state;
};
