import {DEFAULT_FILTER} from "./constants";

export const getMovie = (movies, movieId) => movies.find(({id}) => id === movieId);

export const getGenres = (movies) => {
  const genresSet = new Set([DEFAULT_FILTER]);
  movies.forEach((movie) => genresSet.add(movie.genre));
  return genresSet;
};

export const getRelatedMovies = (movies, movie) => movies.filter(({id, genre}) => id !== movie.id && genre === movie.genre);

export const getFilteredMovies = (movies, filter) => {
  return filter === DEFAULT_FILTER
    ? movies
    : movies.filter((movie) => movie.genre === filter);
};

