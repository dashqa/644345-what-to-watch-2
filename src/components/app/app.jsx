import React from "react";
import MainPage from "../main-page/main-page.jsx";
import {MOVIES} from "../../mocks/movies";

const App = () => {
  return <MainPage movies={MOVIES}/>;
};

export default App;
