import {setMovies, setPromoMovie} from "@store/movies-data/action-creators";
import {setFetchingMovies, setFetchingPromo} from "@store/common/action-creators";

export const loadMovies = () => (dispatch, _, api) => {
  dispatch(setFetchingMovies(true));
  return api.get(`/films`)
      .then(({data}) => {
        dispatch(setMovies(data));
        dispatch(setFetchingMovies(false));
      })
      .catch((error) => {
        throw new Error(`${error} on loading movies`);
      });
};

export const loadPromoMovie = () => (dispatch, _, api) => {
  dispatch(setFetchingPromo(true));
  return api.get(`/films/promo`)
      .then(({data}) => {
        dispatch(setPromoMovie(data));
        dispatch(setFetchingPromo(false));
      })
      .catch((error) => {
        throw new Error(`${error} on loading promo movie`);
      });
};
