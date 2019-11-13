import {ActionTypes} from "./action-types";
import {setFetching, setMovies, setPromoMovie} from "./actions";
import {parseMovie, parseMovies} from "../api/utils";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL} from "../constants";

export const initialState = {
  movies: [],
  promoMovie: {},
  activeFilter: DEFAULT_FILTER,
  moviesCounter: MOVIES_COUNTER_INITIAL,
  isAuthorized: false,
  isLoading: false,
};

export const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    dispatch(setFetching(true));
    return api.get(`/films`)
      .then(({data}) => {
        dispatch(setMovies(data));
        dispatch(setFetching(false));
      })
      .catch((error) => {
        throw new Error(`${error} on loading movies`);
      });
  },
  loadPromoMovie: () => (dispatch, _, api) => {
    dispatch(setFetching(true));
    return api.get(`/films/promo`)
      .then(({data}) => {
        dispatch(setPromoMovie(data));
        dispatch(setFetching(false));
      })
      .catch((error) => {
        throw new Error(`${error} on loading promo movie`);
      });
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MOVIES:
      return Object.assign({}, state, {
        movies: parseMovies(action.payload),
      });

    case ActionTypes.SET_PROMO_MOVIE:
      return Object.assign({}, state, {
        promoMovie: parseMovie(action.payload),
      });

    case ActionTypes.SET_ACTIVE_FILTER:
      return Object.assign({}, state, {
        activeFilter: action.payload,
      });

    case ActionTypes.SET_MOVIES_COUNTER:
      return Object.assign({}, state, {
        moviesCounter: state.moviesCounter + action.payload,
      });

    case ActionTypes.SET_IS_AUTHORIZED:
      return Object.assign({}, state, {
        isAuthorized: action.payload,
      });

    case ActionTypes.SET_FETCHING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      });
  }

  return state;
};
