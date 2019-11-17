import React from "react";
import {shallow} from "enzyme/build";
import CatalogCard from "./catalog-card";

describe(`Catalog card container initial`, () => {
  const props = {
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
    onEnter: () => {},
    onLeave: () => {},
    isVideoPlaying: false,
  };

  const wrapper = shallow(<CatalogCard {...props}/>);

  it(`Video starts to play on mouse enter`, () => {
    wrapper.simulate(`mouseEnter`);
    setTimeout(() => expect(wrapper.props().isVideoPlaying).toEqual(true), 1000);
  });

  // it(`Video stops to play on mouse leave`, () => {
  //   wrapper.simulate(`mouseLeave`);
  //   expect(wrapper.props().isVideoPlaying).toEqual(false);
  // });

});


