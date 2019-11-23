import React, {useEffect} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Footer from "@partials/footer/footer";
import Header from "@partials/header/header";

import withAuthSubmit from "@hocs/with-auth-submit/with-auth-submit";

const SignIn = ({onChange, onSubmit, errors, isValid, authorized, history}) => {
  const emailClasses = classNames(`sign-in__field`, {'sign-in__field--error': errors.email.length});
  const passwordClasses = classNames(`sign-in__field`, {'sign-in__field--error': errors.password.length});

  useEffect(() => {
    if (authorized) {
      history.goBack();
    }
  });

  return (
    <div className="user-page">
      <Header/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">

          {!isValid &&
          <div className="sign-in__message">
            <p>{errors.email || errors.password}</p>
          </div>}

          <div className="sign-in__fields">
            <div className={emailClasses}>
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
            <div className={passwordClasses}>
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
  formData: {},
  onChange: () => {},
  onSubmit: () => {},
  errors: {},
  isValid: false,
  authorized: false,
  history: {}
};

SignIn.propTypes = {
  formData: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string),
  isValid: PropTypes.bool.isRequired,
  authorized: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export {SignIn};

export default withAuthSubmit(SignIn);
