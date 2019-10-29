import React from "react";
import {shallow} from "enzyme";
import CatalogCard from "./catalog-card";

const mock = {
  movie: {
    id: 0,
    name: ``,
    posterImage: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    videoLink: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 0,
    scoresCount: 0,
    director: ``,
    starring: [],
    runTime: 0,
    genre: ``,
    released: 0,
    isFavorite: null,
  },
};

it(`Movie details passed to callback is consistent of movie object`, () => {
  const {movie} = mock;
  const handleHover = jest.fn();
  const wrapper = shallow(
      <CatalogCard
        key={movie.id}
        movie={movie}
        onCardHover={handleHover}
      />);

  wrapper.simulate(`mouseEnter`);
  expect(handleHover).toHaveBeenCalledWith(movie);
});


