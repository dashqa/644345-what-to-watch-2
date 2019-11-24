import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import HeaderLogo from "@partials/header-logo/header-logo";
import UserBlock from "@partials/user-block/user-block";

const Header = ({classMods, title, needUserBlock}) => {
  const classes = classNames(`page-header`, classMods);

  return (
    <header className={classes}>
      <HeaderLogo/>

      {title && <h1 className="page-title user-page__title">{title}</h1>}

      {needUserBlock && <UserBlock/>}

    </header>
  );
};

Header.defaultProps = {
  classMods: ``,
  title: ``,
  needUserBlock: false,
};

Header.propTypes = {
  classMods: PropTypes.string,
  title: PropTypes.string,
  needUserBlock: PropTypes.bool,
};

export default Header;
