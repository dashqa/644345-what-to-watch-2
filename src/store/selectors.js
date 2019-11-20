import {createSelector} from "reselect";
import {DEFAULT_FILTER} from "@constants";

export const getMovies = (state) => state.moviesData.movies;
export const getActiveFilter = (state) => state.moviesData.activeFilter;
export const getPromoMovie = (state) => state.moviesData.promoMovie;
export const getMoviesCounter = (state) => state.moviesData.moviesCounter;
export const getMovieById = (state, movieId) => state.moviesData.movies.find(({id}) => id === parseInt(movieId, 10));
export const getFetchingMovies = (state) => state.common.isLoadingMovies;
export const getFetchingPromo = (state) => state.common.isLoadingPromo;

export const getRelatedMovies = (state, currentMovie) =>
  state.moviesData.movies.filter(({id, genre}) => id !== currentMovie.id && genre === currentMovie.genre);

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
