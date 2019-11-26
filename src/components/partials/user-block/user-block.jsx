import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {BASE_URL} from "@api/constants";
import {getUser} from "@store/user-data/selectors";

const UserBlock = ({user}) => {
  const {name, avatarImg} = user;
  const imgPath = (avatarImg || ``).split(`/wtw`).join(``);
  return (
    <div className="user-block">
      {Object.keys(user).length ? (
        <div className="user-block__avatar">
          <Link to={`/my-list`}>
            <img
              src={`${BASE_URL}${imgPath}`}
              alt={name}
              width="63"
              height="63"
            />
          </Link>
        </div>
      ) : (
        <Link to={`/login`} className="user-block__link">Sign in</Link>
      )}
    </div>
  );
};

UserBlock.defaultProps = {
  user: null,
};

UserBlock.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarImg: PropTypes.string,
  })
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export {UserBlock};

export default connect(mapStateToProps)(UserBlock);
