import * as actionType from "./types";
import {MOVIES_COUNTER_STEP} from "@constants";
import {startLoading, stopLoading} from "react-redux-hoc-loader";

export const loadMovies = () => (dispatch, _, api) => {
  dispatch(startLoading(`movies`));
  return api.get(`/films`)
    .then(({data}) => {
      dispatch(setMovies(data));
      dispatch(stopLoading(`movies`));
    })
    .catch((error) => {
      dispatch(stopLoading(`movies`));
      throw new Error(`${error} on loading movies`);
    });
};

export const loadPromoMovie = () => (dispatch, _, api) => {
  dispatch(startLoading(`promo`));
  return api.get(`/films/promo`)
    .then(({data}) => {
      dispatch(setPromoMovie(data));
      dispatch(stopLoading(`promo`));
    })
    .catch((error) => {
      dispatch(stopLoading(`promo`));
      throw new Error(`${error} on loading promo movie`);
    });
};

export const loadComments = (movieId) => (dispatch, _, api) => {
  dispatch(startLoading(`comments`));
  return api.get(`/comments/${movieId}`)
    .then(({data}) => {
      dispatch(setComments(data));
      dispatch(stopLoading(`comments`));
    })
    .catch((error) => {
      dispatch(stopLoading(`comments`));
      throw new Error(`${error} on loading comments`);
    });
};

export const uploadReview = (movieId, formData) => (dispatch, _, api) => {
  dispatch(startLoading(`review`));
  return api.post(`/comments/${movieId}`, formData)
    .then((response) => {
      dispatch(stopLoading(`review`));
      return response;
    })
    .catch((error) => {
      dispatch(stopLoading(`review`));
      throw new Error(`${error} on uploading review`);
    });
};

export const loadFavorite = () => (dispatch, _, api) => {
  dispatch(startLoading(`favorite`));
  return api.get(`/favorite`)
    .then(({data}) => {
      dispatch(setFavorite(data));
      dispatch(stopLoading(`favorite`));
    })
    .catch((error) => {
      dispatch(stopLoading(`favorite`));
      throw new Error(`${error} on uploading favorite list`);
    });
};

export const addToFavorite = (movieId, isFavorite) => (dispatch, _, api) => {
  const status = isFavorite ? 0 : 1;

  dispatch(startLoading(`favorite`));
  return api.post(`/favorite/${movieId}/${status}`)
    .then(({data}) => {
      dispatch(updateMovie(data));
      dispatch(stopLoading(`favorite`));
    })
    .catch((error) => {
      dispatch(stopLoading(`favorite`));
      throw new Error(`${error} on adding to favorite`);
    });
};

export const setMovies = (movies) => {
  return {
    type: actionType.SET_MOVIES,
    payload: movies
  };
};

export const updateMovie = (movie) => {
  return {
    type: actionType.UPDATE_MOVIE,
    payload: movie
  };
};

export const setPromoMovie = (movie) => {
  return {
    type: actionType.SET_PROMO_MOVIE,
    payload: movie
  };
};

export const setActiveFilter = (genre) => {
  return {
    type: actionType.SET_ACTIVE_FILTER,
    payload: genre
  };
};

export const increaseMoviesCounter = () => {
  return {
    type: actionType.INCREASE_MOVIES_COUNTER,
    payload: MOVIES_COUNTER_STEP
  };
};

export const setFavorite = (movies) => {
  return {
    type: actionType.SET_FAVORITE,
    payload: movies
  };
};

export const setComments = (comments) => {
  return {
    type: actionType.SET_COMMENTS,
    payload: comments
  };
};
