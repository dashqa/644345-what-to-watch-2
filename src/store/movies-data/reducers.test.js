import * as actionType from "./types";
import {reducer} from "@store/movies-data/reducers";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL, MOVIES_COUNTER_STEP} from "@constants";
import {replaceMovie, replacePromo} from "@utils";

const initialState = {
  movies: [],
  promoMovie: {},
  activeFilter: DEFAULT_FILTER,
  moviesCounter: MOVIES_COUNTER_INITIAL,
  favorite: [],
  comments: [],
};

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
    "starring": [`Jemaine Clement`],
    "genre": `Comedy`,
    "released": 2019,
    "is_favorite": true,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }],
  adaptedMovies: [{
    id: 1,
    name: `What We Do in the Shadows`,
    posterImage: `https://poster.com/What-We-Do-in-the-Shadows.jpg`,
    previewImage: `https://poster.com/What-We-Do-in-the-Shadows.jpg`,
    backgroundImage: `https://poster.com/What-We-Do-in-the-Shadows.jpg`,
    backgroundColor: `#A39E81`,
    description: `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over` +
      ` 100 years, in Staten Island.`,
    rating: 7.2,
    scoresCount: 6173,
    director: `Jemaine Clement`,
    starring: [`Jemaine Clement`],
    runTime: 30,
    genre: `Comedy`,
    released: 2019,
    isFavorite: true,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }],
  comments: [{
    id: 1,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    date: `2019-11-02T07:20:57.395Z`,
    rating: 3.1,
  }],
};

describe(`Movies data reducer works correctly`, () => {

  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`SET_MOVIES`, () => {
    const action = {
      type: actionType.SET_MOVIES,
      payload: mock.movies,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          movies: mock.adaptedMovies,
        }));
  });

  it(`UPDATE_MOVIE`, () => {
    const action = {
      type: actionType.UPDATE_MOVIE,
      payload: mock.movies[0],
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          movies: replaceMovie(mock.adaptedMovies[0], initialState.movies),
          promoMovie: replacePromo(mock.adaptedMovies[0], initialState.promoMovie)
        }));
  });

  it(`SET_PROMO_MOVIE`, () => {
    const action = {
      type: actionType.SET_PROMO_MOVIE,
      payload: mock.movies[0],
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          promoMovie: mock.adaptedMovies[0],
        }));
  });

  it(`SET_ACTIVE_FILTER`, () => {
    const action = {
      type: actionType.SET_ACTIVE_FILTER,
      payload: `Comedy`,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          activeFilter: `Comedy`,
        }));
  });

  it(`INCREASE_MOVIES_COUNTER`, () => {
    const action = {
      type: actionType.INCREASE_MOVIES_COUNTER,
      payload: MOVIES_COUNTER_STEP,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          moviesCounter: MOVIES_COUNTER_INITIAL + MOVIES_COUNTER_STEP,
        }));
  });

  it(`SET_FAVORITE`, () => {
    const action = {
      type: actionType.SET_FAVORITE,
      payload: mock.movies,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          favorite: mock.adaptedMovies,
        }));
  });

  it(`SET_COMMENTS`, () => {
    const action = {
      type: actionType.SET_COMMENTS,
      payload: mock.comments,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          comments: mock.comments,
        }));
  });
});
