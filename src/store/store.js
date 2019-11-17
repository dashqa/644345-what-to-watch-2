import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

import createAPI from "@api/api";
import {rootReducer} from "@store/reducers";

const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

export default store;
