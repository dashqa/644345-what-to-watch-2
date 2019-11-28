import * as actionType from "./types";
import {reducer} from "@store/user-data/reducers";

const initialState = {
  user: {},
};

const user = {
  "id": 1,
  "avatar_url": `/wtw/static/avatar/6.jpg`,
  "email": `dasha@gmail.com`,
  "name": `dasha`,
};

const adaptedUser = {
  id: 1,
  avatarImg: `/wtw/static/avatar/6.jpg`,
  email: `dasha@gmail.com`,
  name: `dasha`,
};

describe(`User data reducer works correctly`, () => {
  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`SET_USER`, () => {
    const action = {
      type: actionType.SET_USER,
      payload: user,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          user: adaptedUser,
        }));
  });

  it(`RESET_USER`, () => {
    const action = {
      type: actionType.RESET_USER,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          user: initialState.user,
        }));
  });
});
