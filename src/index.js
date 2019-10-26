import React from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter} from 'react-router-dom';
import App from "./components/app/app.jsx";

const init = () => {
  ReactDOM.render(<App/>, document.querySelector(`#root`));
};

init();
