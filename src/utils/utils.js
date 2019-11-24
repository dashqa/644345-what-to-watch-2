import moment from "moment/moment";
import 'moment-duration-format';
import {USER_RATINGS} from "@constants";

export const computeRatingLevel = (rating) => USER_RATINGS.filter((rank) => rank.min <= rating).pop().title;
export const formatTime = (time, unit, format) => moment.duration(time, unit).format(format, {trim: false});
export const formatDate = (date, format) => moment(date).format(format);

export const replaceMovie = (movie, movies) => {
  const {id} = movie;
  const index = movies.findIndex((oldMovie) => oldMovie.id === id);
  movies.splice(index, 1, movie);
  return movies;
};

export const replacePromo = (updatedMovie, promoMovie) => {
  return updatedMovie.id === promoMovie.id ? updatedMovie : promoMovie;
};
