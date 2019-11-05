import React from "react";
import {Switch, Route} from "react-router-dom";
import MainPage from "../pages/main-page/main-page.jsx";
import MovieDetails from "../pages/movie-details/movie-details.jsx";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/films/:id' component={MovieDetails}/>
    </Switch>
  );
};

export default App;
