import MockAdapter from "axios-mock-adapter";
import createAPI from "@api/api";
import {
  addToFavorite,
  loadComments,
  loadFavorite,
  loadMovies,
  loadPromoMovie,
  uploadReview,
  Url,
} from "@store/movies-data/actions";
import {reducer} from "@store/movies-data/reducers";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL} from "@constants";
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
    "runTime": 30,
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

describe(`Reducer works correctly`, () => {
  const onError = jest.fn();
  const api = createAPI(onError);
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      movies: [],
      promoMovie: {},
      activeFilter: DEFAULT_FILTER,
      moviesCounter: MOVIES_COUNTER_INITIAL,
      favorite: [],
      comments: [],
    });
  });


  it(`Should make a correct call to /films`, () => {
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

  it(`Should make a correct call to /promo`, () => {
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

  it(`Should make a correct call to /comments`, () => {
    const commentsLoader = loadComments();
    const movieId = 1;

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

  it(`Should make a correct call to /favorite`, () => {
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
    const uploadReviewLoader = uploadReview();
    const movieId = 1;

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

  it(`Should post data to /comments`, () => {
    const uploadReviewLoader = addToFavorite();
    const movieId = 1;

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
});
