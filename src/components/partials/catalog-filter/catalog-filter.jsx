import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {bindActionCreators} from "redux";
import {setActiveFilter, getGenres} from "../../../store/actions";
import {connect} from "react-redux";

const CatalogFilter = ({active, onChange, genres}) => {
  return (
    <ul className="catalog__genres-list">
      {[...genres].map((genre) => {
        const classes = classNames(`catalog__genres-item`, {'catalog__genres-item--active': active === genre});

        return (
          <li
            key={genre}
            className={classes}
            onClick={() => onChange(genre)}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

CatalogFilter.defaultProps = {
  active: `all`,
  genres: {},
  onChange: () => {}
};

CatalogFilter.propTypes = {
  active: PropTypes.string.isRequired,
  genres: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  active: state.activeFilter,
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: bindActionCreators(setActiveFilter, dispatch),
  };
};

export {CatalogFilter};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogFilter);
