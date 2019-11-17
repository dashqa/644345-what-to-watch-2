export const movieAdapter = (movie) => {
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

export const moviesAdapter = (movies) => movies.map((movie) => movieAdapter(movie));
