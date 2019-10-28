import React from 'react';
import renderer from 'react-test-renderer';
import UIButton from './UI-button';

const mock = {
  classMods: [],
  svg: ``,
  svgViewBox: ``,
  svgWidth: 0,
  svgHeight: 0,
  title: ``
};

it(`UI button correctly renders after relaunch`, () => {
  const {classMods, svg, svgViewBox, svgWidth, svgHeight, title} = mock;
  const tree = renderer.create(
      <UIButton
        classMods={classMods}
        svg={svg}
        svgViewBox={svgViewBox}
        svgHeight={svgHeight}
        svgWidth={svgWidth}
        title={title}
        onButtonClick={()=>{}}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
