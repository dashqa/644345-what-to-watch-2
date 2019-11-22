import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import throttle from "lodash/throttle";

import createAPI from "@api/api";
import reducers from "@store/rootReducer";
import {loadState, saveState} from '@store/sessionStorage';

const persistedState = loadState();
const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))
    ));

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user,
  });
}, 1000));

export default store;
