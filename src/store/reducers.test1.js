import {initialState, rootReducer} from "./reducers1";

// const mock = {
//   state: {
//     movies-data: [{
//       "name": `Midnight Special`,
//       "posterImage": `https://es31-server.appspot.com/wtw/static/film/poster/Midnight_Special.jpg`,
//       "previewImage": `https://es31-server.appspot.com/wtw/static/film/preview/midnight-special.jpg`,
//       "backgroundImage": `https://es31-server.appspot.com/wtw/static/film/background/Midnight_Special.jpg`,
//       "backgroundColor": `#828585`,
//       "description": `A father and son go on the run, pursued by the government and a cult drawn to the child's special powers.`,
//       "rating": 3.3,
//       "scoresCount": 67815,
//       "director": `Jeff Nichols`,
//       "starring": [
//         `Michael Shannon`,
//         `Joel Edgerton`,
//         `Kirsten Dunst `
//       ],
//       "runTime": 112,
//       "genre": `Action`,
//       "released": 2016,
//       "id": 1,
//       "isFavorite": false,
//       "videoLink": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
//       "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
//     }],
//     promoMovie: {},
//   },
// };

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters return initial state`, () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  // it(`Reducer should set active filter by a given value`, () => {
  //   expect(rootReducer({
  //     movies-data: state.movies-data,
  //     promoMovie: {},
  //     currentMovie: {},
  //     genres: [],
  //     relatedMovies: [],
  //     activeFilter: `All genres`,
  //   }, {
  //     type: `SET_ACTIVE_FILTER`,
  //     payload: `Drama`
  //   }))
  //     .toEqual({
  //       activeFilter: `Drama`,
  //       movies-data: state.movies-data,
  //       promoMovie: {},
  //       currentMovie: {},
  //       genres: [],
  //       relatedMovies: [],
  //     });
  // });
  //
  // it(`Reducer should set current movie by a given value`, () => {
  //   expect(rootReducer({
  //     movies-data: state.movies-data,
  //     promoMovie: {},
  //     currentMovie: {},
  //     genres: [],
  //     relatedMovies: [],
  //     activeFilter: `All genres`,
  //   }, {
  //     type: `SET_CURRENT_MOVIE`,
  //     payload: state.movies-data[0]
  //   }))
  //     .toEqual({
  //       currentMovie: state.movies-data[0],
  //       movies-data: state.movies-data,
  //       promoMovie: {},
  //       genres: [],
  //       relatedMovies: [],
  //       activeFilter: `All genres`,
  //     });
  // });
});
