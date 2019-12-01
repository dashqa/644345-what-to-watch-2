import React from 'react';
import {shallow} from 'enzyme';
import {MovieButtons} from "./movie-buttons";

const props = {
  movieId: 1,
  isFavorite: false,
  onAddToFavorite: jest.fn(),
};

describe(`Movie buttons test`, () => {
  const wrapper = shallow(<MovieButtons {...props}/>);

  it(`should call an onAddToFavorite function when call handleAddMyListClick`, () => {
    wrapper.instance()._handleAddMyListClick();
    expect(props.onAddToFavorite).toHaveBeenCalledTimes(1);
  });

  it(`should redirect to player page when call handlePlayClick`, () => {
    wrapper.instance()._handlePlayClick();
    expect(window.location.href).toBe(`http://localhost/films/${props.movieId}/player`);
  });
});
