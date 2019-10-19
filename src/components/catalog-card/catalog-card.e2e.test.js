import React from "react";
import {shallow} from "enzyme";
import CatalogCard from "./catalog-card";

it(`Click handler on card title can be called only once`, () => {
  const preventDefault = jest.fn();
  const wrapper = shallow(<CatalogCard
    title={`Spider Man`}
  />);

  wrapper.find(`.small-movie-card__title`).forEach((title) => {
    title.simulate(`click`, {preventDefault});
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });
});
