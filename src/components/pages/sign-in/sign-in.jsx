import React from "react";
import PropTypes from "prop-types";

import Footer from "@partials/footer/footer";
import Header from "@partials/header/header";

import withFormData from "@hocs/with-form-data/with-form-data";

const SignIn = ({onChange, onSubmit, errors, isValid}) => {
  return (
    <div className="user-page">
      <Header/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">

          {!isValid &&
              <div className="sign-in__message">
                <p>{errors.email || errors.password}</p>
              </div>
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                onChange={onChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                onChange={onChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={onSubmit}
              disabled={!isValid}
            >
                Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

SignIn.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  errors: {},
  isValid: false,
};

SignIn.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string),
  isValid: PropTypes.bool.isRequired,
};

export {SignIn};
export default withFormData(SignIn);
