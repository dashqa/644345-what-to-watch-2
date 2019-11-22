import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";

import UserBlock from "@partials/user-block/user-block";

const Header = ({location}) => {
  const isLoginPage = location.pathname === `/login`;

  const classes = classNames(`page-header`, {
    'movie-card__head': !isLoginPage,
    'user-page__head': isLoginPage
  });

  return (
    <header className={classes}>
      <div className="logo">
        <Link
          to={`/`}
          className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {isLoginPage ? (
        <h1 className="page-title user-page__title">Sign in</h1>
      ) : (
        <UserBlock/>
      )}
    </header>
  );
};

Header.defaultProps = {
  location: {},
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
