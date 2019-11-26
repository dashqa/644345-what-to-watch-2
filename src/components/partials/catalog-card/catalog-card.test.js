import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import CatalogCard from './catalog-card';

const props = {
  movie: {
    id: 1,
    name: `Macbeth`,
    previewImage: `http://image.com/image.png`,
    previewVideoLink: `http://video.com/video.mp4`
  },
  videoRef: React.createRef(),
  onEnter: () => {},
  onLeave: () => {},
};

it(`Catalog card correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><CatalogCard {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
