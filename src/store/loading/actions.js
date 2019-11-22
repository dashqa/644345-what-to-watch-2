import * as actionType from "./types";

export const setFetching = (scope, loading) => {
  return {
    type: actionType.SET_FETCHING,
    payload: {
      scope,
      loading,
    },
  };
};
