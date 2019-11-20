import {ActionTypes} from "@store/common/action-types";

const initialState = {
  isLoadingMovies: false,
  isLoadingPromo: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
