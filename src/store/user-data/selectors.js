import {createSelector} from "reselect";

export const getUser = (state) => state.user.user;

export const getAuthStatus = createSelector(
    [getUser],
    (user) => {
      return Object.keys(user).length > 0;
    }
);
