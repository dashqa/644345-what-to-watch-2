import React from "react";
import MainPage from "../main-page/main-page.jsx";

const FILM_TITLES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Spider Man`];

const App = () => {
  return <MainPage filmTitles={FILM_TITLES}/>;
};

export default App;
