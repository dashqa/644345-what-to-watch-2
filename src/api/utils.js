export const getAdaptedUser = (user) => {
  const {
    id = null,
    name = ``,
    email = ``,
    avatar_url: avatarImg = ``
  } = user;

  return {
    id, name, email, avatarImg
  };
};

export const getAdaptedMovie = (movie) => {
  const {
    id = null,
    name = ``,
    poster_image: posterImage = ``,
    preview_image: previewImage = ``,
    background_image: backgroundImage = ``,
    background_color: backgroundColor = ``,
    description = ``,
    rating = null,
    scores_count: scoresCount = null,
    director = ``,
    starring = [],
    run_time: runTime = null,
    genre = ``,
    released = null,
    is_favorite: isFavorite = false,
    video_link: videoLink = ``,
    preview_video_link: previewVideoLink = ``
  } = movie;

  return {
    id, name, posterImage, previewImage, backgroundImage, backgroundColor, description, rating, scoresCount, director,
    starring, runTime, genre, released, isFavorite, videoLink, previewVideoLink,
  };
};

export const getAdaptedMovies = (movies) => movies.map((movie) => getAdaptedMovie(movie));
