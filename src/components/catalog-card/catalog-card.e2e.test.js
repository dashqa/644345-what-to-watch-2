import React from "react";
import {mount} from "enzyme";
import CatalogCard from "./catalog-card";

it(`Click handler on card title can be called only once`, () => {
  const preventDefault = jest.fn();
  const wrapper = mount(<CatalogCard
    title={`Spider Man`}
  />);

  wrapper.find(`.small-movie-card__title`).forEach((title) => {
    title.simulate(`click`, {preventDefault});
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });
});
