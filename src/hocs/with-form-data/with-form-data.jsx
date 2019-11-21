import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "recompose";
import {bindActionCreators} from "redux";

import {validateForm} from "@utils";
import {authorizeUser} from "@store/user/operations";

const withFormData = (Component) => {
  class WithFormData extends React.PureComponent {
    constructor(props) {
      super(props);

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChange = this._handleChange.bind(this);

      this.state = {
        email: ``,
        password: ``,
        errors: {
          email: ``,
          password: ``,
        },
        isValid: false,
      };

    }

    render() {
      const {errors, isValid} = this.state;

      return <Component
        {...this.props}
        errors={errors}
        isValid={isValid}
        onChange={this._handleChange}
        onSubmit={this._handleSubmit}
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

      const isValid = validateForm(errors);

      this.setState({
        errors,
        isValid,
        [name]: value,
      });
    }

    _handleSubmit(evt) {
      evt.preventDefault();
      const {onAuthorizeUser} = this.props;
      const {isValid, email, password} = this.state;
      if (!isValid) {
        return;
      }

      onAuthorizeUser({email, password});
    }
  }

  WithFormData.propTypes = {
    onAuthorizeUser: PropTypes.func.isRequired
  };

  return WithFormData;
};

const mapDispatchToProps = (dispatch) => ({
  onAuthorizeUser: bindActionCreators(authorizeUser, dispatch)
});

const WithFormDataWrapped = compose(
    connect(null, mapDispatchToProps),
    withFormData
);

export default WithFormDataWrapped;


