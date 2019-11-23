import {combineReducers} from "redux";
import {reducer as moviesData} from "@store/movies-data/reducers";
import {reducer as user} from "@store/user-data/reducers";
import {reducer as loading} from "@store/loading/reducers";

export default combineReducers({
  moviesData,
  user,
  loading,
});
