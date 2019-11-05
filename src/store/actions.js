import {DEFAULT_FILTER} from "../constants";

export const setActiveFilter = (activeGenre) => {
  return {
    type: `SET_ACTIVE_FILTER`,
    payload: activeGenre
  };
};

export const setCurrentMovie = (movie) => {
  return {
    type: `SET_CURRENT_MOVIE`,
    payload: movie
  };
};

export const getFilteredMovies = ({movies, activeFilter}) => {
  return activeFilter === DEFAULT_FILTER
    ? movies
    : movies.filter((movie) => movie.genre === activeFilter);
};

export const getGenres = ({movies}) => {
  const genresSet = new Set([DEFAULT_FILTER]);
  movies.forEach((movie) => genresSet.add(movie.genre));
  return genresSet;
};

