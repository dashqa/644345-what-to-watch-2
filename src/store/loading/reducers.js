import * as actionType from "./types";

const initialState = {
  moviesLoading: false,
  promoLoading: false,
  reviewLoading: false,
  favoriteLoading: false,
};

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  if (type === actionType.SET_FETCHING) {
    return Object.assign({}, state, {
      [`${payload.scope}Loading`]: payload.loading,
    });
  }

  return state;
};
