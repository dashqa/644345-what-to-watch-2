import axios from 'axios/index';
import {BASE_URL, TIMEOUT} from "@api/constants";

import history from "@store/history";
import {resetUser} from "@store/user-data/actions";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      history.push(`/login`);
      dispatch(resetUser());
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
