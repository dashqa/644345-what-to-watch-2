import React from "react";
import {validateForm} from "@utils";

const withFormData = (Component) => {
  class WithFormData extends React.PureComponent {
    constructor(props) {
      super(props);

      this._handleChange = this._handleChange.bind(this);

      this.state = {
        formData: {
          email: ``,
          password: ``,
        },
        errors: {
          email: ``,
          password: ``,
        },
        isValid: false,
      };
    }

    render() {
      const {errors, isValid, formData} = this.state;

      return <Component
        {...this.props}
        formData={formData}
        errors={errors}
        isValid={isValid}
        onChange={this._handleChange}
      />;
    }

    _handleChange(evt) {
      const {name, value} = evt.target;
      const errors = Object.assign({}, this.state.errors);
      const emailRegEx = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

      switch (name) {
        case `email`:
          errors.email =
            emailRegEx.test(value)
              ? ``
              : `Please enter a valid email address.`;
          break;
        case `password`:
          errors.password =
            value.length <= 3
              ? `Please enter a valid password.`
              : ``;
          break;
        default:
          break;
      }

      this.setState((prevState) => {
        const formData = Object.assign({}, prevState.formData);
        formData[name] = value;

        return {
          formData,
          errors,
          isValid: validateForm(errors, formData)
        };
      });
    }
  }

  return WithFormData;
};

export default withFormData;


