import axios from 'axios/index';
import {setIsAuthorized} from "@store/actions";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
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
