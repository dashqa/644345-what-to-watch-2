import MockAdapter from "axios-mock-adapter";
import createAPI from "@api/api";
import * as actionType from "./types";
import {resetUser, Url} from "@store/user-data/actions";
import {authorizeUser} from "@store/user-data/actions";

const userReply = {
  "id": 1,
  "avatar_url": `/wtw/static/avatar/6.jpg`,
  "email": `dasha@gmail.com`,
  "name": `dasha`,
};

const loginData = {
  email: `dasha@gmail.com`,
  password: `1234567`
};

describe(`User data actions works correctly`, () => {
  const onError = jest.fn();
  const api = createAPI(onError);
  const apiMock = new MockAdapter(api);

  it(`Action creator for reset user returns correct action`, () => {
    expect(resetUser()).toEqual({
      type: actionType.RESET_USER,
    });
  });

  it(`Should make a correct API call to /login`, () => {
    const dispatch = jest.fn();
    const onAuthorizeLoader = authorizeUser(loginData);

    apiMock
      .onPost(Url.LOGIN)
      .reply(200, userReply);

    return onAuthorizeLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actionType.SET_USER,
          payload: userReply
        });
      });
  });
});
