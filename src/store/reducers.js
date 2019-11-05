import {MOVIES} from "../mocks/movies";

export const initialState = {
  movies: MOVIES,
  promoMovie: MOVIES[0],
  currentMovie: {},
  genres: [],
  relatedMovies: [],
  activeFilter: `All genres`,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_ACTIVE_FILTER`: return Object.assign({}, state, {
      activeFilter: action.payload,
    });
    case `SET_CURRENT_MOVIE`: return Object.assign({}, state, {
      currentMovie: action.payload,
    });
  }

  return state;
};
