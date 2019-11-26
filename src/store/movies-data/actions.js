import * as actionType from "./types";
import {MOVIES_COUNTER_STEP, Fetch} from "@constants";
import {startLoading, stopLoading} from "react-redux-hoc-loader";

const Url = {
  MOVIES: `/films`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
};

export const loadMovies = () => (dispatch, _, api) => {
  dispatch(startLoading(Fetch.MOVIES));
  return api.get(Url.MOVIES)
    .then(({data}) => {
      dispatch(setMovies(data));
      dispatch(stopLoading(Fetch.MOVIES));
    })
    .catch((error) => {
      dispatch(stopLoading(Fetch.MOVIES));
      throw new Error(`${error} on loading movies`);
    });
};

export const loadPromoMovie = () => (dispatch, _, api) => {
  dispatch(startLoading(Fetch.PROMO));
  return api.get(Url.PROMO)
    .then(({data}) => {
      dispatch(setPromoMovie(data));
      dispatch(stopLoading(Fetch.PROMO));
    })
    .catch((error) => {
      dispatch(stopLoading(Fetch.PROMO));
      throw new Error(`${error} on loading promo movie`);
    });
};

export const loadComments = (movieId) => (dispatch, _, api) => {
  dispatch(startLoading(Fetch.COMMENTS));
  return api.get(`${Url.COMMENTS}/${movieId}`)
    .then(({data}) => {
      dispatch(setComments(data));
      dispatch(stopLoading(Fetch.COMMENTS));
    })
    .catch((error) => {
      dispatch(stopLoading(Fetch.COMMENTS));
      throw new Error(`${error} on loading comments`);
    });
};

export const uploadReview = (movieId, formData) => (dispatch, _, api) => {
  dispatch(startLoading(Fetch.REVIEW));
  return api.post(`${Url.COMMENTS}/${movieId}`, formData)
    .then((response) => {
      dispatch(stopLoading(Fetch.REVIEW));
      return response;
    })
    .catch((error) => {
      dispatch(stopLoading(Fetch.REVIEW));
      throw new Error(`${error} on uploading review`);
    });
};

export const loadFavorite = () => (dispatch, _, api) => {
  dispatch(startLoading(Fetch.FAVORITE));
  return api.get(Url.FAVORITE)
    .then(({data}) => {
      dispatch(setFavorite(data));
      dispatch(stopLoading(Fetch.FAVORITE));
    })
    .catch((error) => {
      dispatch(stopLoading(Fetch.FAVORITE));
      throw new Error(`${error} on uploading favorite list`);
    });
};

export const addToFavorite = (movieId, isFavorite) => (dispatch, _, api) => {
  const status = isFavorite ? 0 : 1;

  dispatch(startLoading(Fetch.FAVORITE));
  return api.post(`${Url.FAVORITE}/${movieId}/${status}`)
    .then(({data}) => {
      dispatch(updateMovie(data));
      dispatch(stopLoading(Fetch.FAVORITE));
    })
    .catch((error) => {
      dispatch(stopLoading(Fetch.FAVORITE));
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
