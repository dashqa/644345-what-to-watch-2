import React from "react";
import classNames from "classnames";

import HeaderLogo from "@partials/header-logo/header-logo";
import UserBlock from "@partials/user-block/user-block";

const Header = () => {
  const isLoginPage = location.pathname === `/login`;

  const classes = classNames(`page-header`, {
    'movie-card__head': !isLoginPage,
    'user-page__head': isLoginPage
  });

  return (
    <header className={classes}>
      <HeaderLogo/>

      {isLoginPage ? (
        <h1 className="page-title user-page__title">Sign in</h1>
      ) : (
        <UserBlock/>
      )}
    </header>
  );
};

export default Header;
