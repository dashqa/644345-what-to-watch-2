import React from "react";
import MainPage from "./main-page/main-page.jsx";

const App = () => {
  const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Spider Man`];
  return <MainPage
    films={films}
  />;
};

export default App;
