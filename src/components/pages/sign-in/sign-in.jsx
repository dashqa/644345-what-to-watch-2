import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {authorizeUser} from "@store/user-data/actions";

import Footer from "@partials/footer/footer";
import Header from "@partials/header/header";

import withFormData from "@hocs/with-form-data/with-form-data";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    const {onChange, errors, isValid} = this.props;
    const emailClasses = classNames(`sign-in__field`, {'sign-in__field--error': errors.email.length});
    const passwordClasses = classNames(`sign-in__field`, {'sign-in__field--error': errors.password.length});

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
                onClick={this._handleSubmit}
                disabled={!isValid}
              >
                Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {formData, onAuthorizeUser, isValid} = this.props;
    if (!isValid) {
      return;
    }

    onAuthorizeUser({
      email: formData.email,
      password: formData.password
    });
  }
}

SignIn.defaultProps = {
  formData: {},
  onChange: () => {},
  onSubmit: () => {},
  errors: {},
  isValid: false,
  onAuthorizeUser: () => {},
};

SignIn.propTypes = {
  formData: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string),
  isValid: PropTypes.bool.isRequired,
  onAuthorizeUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAuthorizeUser: bindActionCreators(authorizeUser, dispatch)
});

export {SignIn};
export default connect(null, mapDispatchToProps)(withFormData(SignIn));
