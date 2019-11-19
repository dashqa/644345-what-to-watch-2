import {createSelector} from "reselect";
import {DEFAULT_FILTER} from "@constants";

export const getMovies = (state) => state.movies;
export const getActiveFilter = (state) => state.activeFilter;
export const getPromoMovie = (state) => state.promoMovie;
export const getMoviesCounter = (state) => state.moviesCounter;
export const getMovieById = (state, movieId) => state.movies.find(({id}) => id === parseInt(movieId, 10));
export const getFetchingMovies = (state) => state.isLoadingMovies;
export const getFetchingPromo = (state) => state.isLoadingPromo;

export const getRelatedMovies = (state, currentMovie) =>
  state.movies.filter(({id, genre}) => id !== currentMovie.id && genre === currentMovie.genre);

export const getGenres = createSelector(
    [getMovies],
    (movies) => {
      const genresSet = new Set([DEFAULT_FILTER]);
      movies.forEach((movie) => genresSet.add(movie.genre));
      return genresSet;
    }
);

export const getFilteredMovies = createSelector(
    [getMovies, getActiveFilter, getMoviesCounter],
    (movies, filter, counter) => {
      return filter === DEFAULT_FILTER
        ? movies.slice(0, counter)
        : movies.filter(({genre}) => genre === filter).slice(0, counter);
    });
