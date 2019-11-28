// import React from "react";
// import {shallow} from "enzyme";
// import {AddReview} from "./add-review";
//
// const props = {
//   currentMovie: {},
//   isValid: false,
//   formData: {
//     rating: `2`,
//     comment: `hello`
//   },
//   error: `Error 401`,
//   onChange: jest.fn(),
//   onSubmit: jest.fn(),
//   loaders: {
//     review: {
//       status: false
//     }
//   },
// };
//
// describe(`check the onChange callback`, () => {
//   const onChange = jest.fn();
//   const onSubmit = jest.fn();
//
//   const wrapper = shallow(
//     <AddReview
//       formData={props.formData}
//       onChange={onChange}
//       onSubmit={onSubmit}
//       loaders={props.loaders}
//     />);
//   const TextAreaElement = wrapper.find(`textarea`);
//   const InputRadioElement = wrapper.find(`rating`).first();
//
//   it(`onChange textarea callback`, () => {
//     TextAreaElement.simulate(`change`, props.formData.comment);
//     expect(onChange).toHaveBeenCalledWith(props.formData.comment);
//   });
//
//   it(`onChange radio callback`, () => {
//     InputRadioElement.simulate(`change`, props.formData.rating);
//     expect(onChange).toHaveBeenCalledWith(props.formData.rating);
//   });
// });
