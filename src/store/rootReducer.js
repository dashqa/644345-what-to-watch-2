import {combineReducers} from "redux";
import {reducer as moviesData} from "@store/movies-data/reducers";
import {reducer as user} from "@store/user-data/reducers";
import {reducer as loadersReducer} from "react-redux-hoc-loader";

export default combineReducers({
  moviesData,
  user,
  loaders: loadersReducer,
});
