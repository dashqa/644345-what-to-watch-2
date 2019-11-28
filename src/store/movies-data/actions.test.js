import MockAdapter from "axios-mock-adapter";
import createAPI from "@api/api";
import {addToFavorite, increaseMoviesCounter, loadComments, loadFavorite, loadMovies, loadPromoMovie, setActiveFilter, uploadReview, Url} from "@store/movies-data/actions";
import {MOVIES_COUNTER_STEP} from "@constants";
import * as actionType from "./types";

const mock = {
  movies: [{
    "id": 1,
    "name": `What We Do in the Shadows`,
    "poster_image": `https://poster.com/What-We-Do-in-the-Shadows.jpg`,
    "preview_image": `https://poster.com/What-We-Do-in-the-Shadows.jpg`,
    "background_image": `https://poster.com/What-We-Do-in-the-Shadows.jpg`,
    "background_color": `#A39E81`,
    "description": `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over` +
      ` 100 years, in Staten Island.`,
    "rating": 7.2,
    "scores_count": 6173,
    "director": `Jemaine Clement`,
    "run_time": 30,
    "genre": `Comedy`,
    "released": 2019,
    "is_favorite": true,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }],
  comments: [{
    id: 1,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    date: `2019-11-02T07:20:57.395Z`,
    rating: 3.1,
  }],
  formData: [{
    rating: 3,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }]
};

describe(`Movies data actions works correctly`, () => {
  const onError = jest.fn();
  const api = createAPI(onError);
  const apiMock = new MockAdapter(api);

  it(`Action creator for setting active filter returns correct action`, () => {
    expect(setActiveFilter(`Comedy`)).toEqual({
      type: actionType.SET_ACTIVE_FILTER,
      payload: `Comedy`
    });
  });

  it(`Action creator for increasing movies counter returns correct action`, () => {
    expect(increaseMoviesCounter()).toEqual({
      type: actionType.INCREASE_MOVIES_COUNTER,
      payload: MOVIES_COUNTER_STEP
    });
  });

  it(`Should make a correct API call to /films`, () => {
    const dispatch = jest.fn();
    const moviesLoader = loadMovies();

    apiMock
      .onGet(Url.MOVIES)
      .reply(200, mock.movies);

    return moviesLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `@@loading/START`,
          payload: {movies: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionType.SET_MOVIES,
          payload: mock.movies
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `@@loading/STOP`,
          payload: {movies: false}
        });
      });
  });

  it(`Should make a correct API call to /promo`, () => {
    const dispatch = jest.fn();
    const promoLoader = loadPromoMovie();

    apiMock
      .onGet(Url.PROMO)
      .reply(200, mock.movies[0]);

    return promoLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `@@loading/START`,
          payload: {promo: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionType.SET_PROMO_MOVIE,
          payload: mock.movies[0]
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `@@loading/STOP`,
          payload: {promo: false}
        });
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const dispatch = jest.fn();
    const movieId = 1;
    const commentsLoader = loadComments(movieId);

    apiMock
      .onGet(`${Url.COMMENTS}/${movieId}`)
      .reply(200, mock.comments);

    return commentsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `@@loading/START`,
          payload: {comments: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionType.SET_COMMENTS,
          payload: mock.comments
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `@@loading/STOP`,
          payload: {comments: false}
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const dispatch = jest.fn();
    const favoriteLoader = loadFavorite();

    apiMock
      .onGet(Url.FAVORITE)
      .reply(200, mock.movies);

    return favoriteLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `@@loading/START`,
          payload: {favorite: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionType.SET_FAVORITE,
          payload: mock.movies
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `@@loading/STOP`,
          payload: {favorite: false}
        });
      });
  });

  it(`Should post data to /comments`, () => {
    const dispatch = jest.fn();
    const movieId = 1;
    const uploadReviewLoader = uploadReview(movieId, mock.formData);

    apiMock
      .onPost(`${Url.COMMENTS}/${movieId}`, mock.formData)
      .reply(200, mock.formData);

    return uploadReviewLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `@@loading/START`,
          payload: {review: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionType.SET_COMMENTS,
          payload: mock.formData
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `@@loading/STOP`,
          payload: {review: false}
        });
      });
  });

  it(`Should post data to /favorite`, () => {
    const dispatch = jest.fn();
    const initialMovie = {
      id: 1,
      isFavorite: false,
    };

    const expectedMovie = {
      id: 1,
      isFavorite: true,
    };

    const addToFavoriteLoader = addToFavorite(initialMovie.id, initialMovie.isFavorite);
    const status = 1;

    apiMock
      .onPost(`${Url.FAVORITE}/${initialMovie.id}/${status}`)
      .reply(200, expectedMovie);

    return addToFavoriteLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `@@loading/START`,
          payload: {favorite: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionType.UPDATE_MOVIE,
          payload: expectedMovie
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: `@@loading/STOP`,
          payload: {favorite: false}
        });
      });
  });
});
