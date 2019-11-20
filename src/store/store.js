import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import createAPI from "@api/api";

import {reducer as moviesData} from "./movies-data/movies-data";
import {reducer as common} from "./common/common";
import {reducer as user} from "./user/user";

const reducers = combineReducers({
  moviesData,
  common,
  user,
});


const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

export default store;
