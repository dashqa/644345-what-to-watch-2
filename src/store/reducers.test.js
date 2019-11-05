import {initialState, rootReducer} from "./reducers";

const mock = {
  state: {
    movies: [{
      id: 1,
      name: `The Grand Budapest Hotel`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
      backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
      backgroundColor: `#ffffff`,
      videoLink: `https://some-link`,
      previewVideoLink: `https://some-link`,
      description: ``,
      rating: 8.9,
      scoresCount: 240,
      director: `Wes Andreson`,
      starring: [`Bill Murray`],
      runTime: 99,
      genre: `Drama`,
      released: 2014,
      isFavorite: false,
    }],
    promoMovie: {},
    currentMovie: {},
    genres: [],
    relatedMovies: [],
    activeFilter: `All genres`,
  },
};

describe(`Reducer works correctly`, () => {
  const {state} = mock;
  it(`Reducer without additional parameters return initial state`, () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should set active filter by a given value`, () => {
    expect(rootReducer({
      movies: state.movies,
      promoMovie: {},
      currentMovie: {},
      genres: [],
      relatedMovies: [],
      activeFilter: `All genres`,
    }, {
      type: `SET_ACTIVE_FILTER`,
      payload: `Drama`
    }))
      .toEqual({
        activeFilter: `Drama`,
        movies: state.movies,
        promoMovie: {},
        currentMovie: {},
        genres: [],
        relatedMovies: [],
      });
  });

  it(`Reducer should set current movie by a given value`, () => {
    expect(rootReducer({
      movies: state.movies,
      promoMovie: {},
      currentMovie: {},
      genres: [],
      relatedMovies: [],
      activeFilter: `All genres`,
    }, {
      type: `SET_CURRENT_MOVIE`,
      payload: state.movies[0]
    }))
      .toEqual({
        currentMovie: state.movies[0],
        movies: state.movies,
        promoMovie: {},
        genres: [],
        relatedMovies: [],
        activeFilter: `All genres`,
      });
  });
});
