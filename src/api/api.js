import axios from 'axios/index';
import {setIsAuthorized} from "@store/action-creators";
import {BASE_URL, TIMEOUT} from "@api/constants";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === 403) {
      dispatch(setIsAuthorized());
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
