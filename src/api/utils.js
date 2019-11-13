export const parseMovie = (movie) => ({
  id: movie.id || null,
  name: movie.name || ``,
  posterImage: movie.poster_image || ``,
  previewImage: movie.preview_image || ``,
  backgroundImage: movie.background_image || ``,
  backgroundColor: movie.background_color || ``,
  description: movie.description || ``,
  rating: movie.rating || null,
  scoresCount: movie.scores_count || null,
  director: movie.director || ``,
  starring: movie.starring || [],
  runTime: movie.run_time || null,
  genre: movie.genre || ``,
  released: movie.released || null,
  isFavorite: movie.is_favorite || false,
  videoLink: movie.video_link || ``,
  previewVideoLink: movie.preview_video_link || ``
});

export const parseMovies = (movies) => movies.map((movie) => parseMovie(movie));
