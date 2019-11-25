import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

import {loadFavorite} from "@store/movies-data/actions";
import {getFavoriteMovies} from "@store/movies-data/selectors";
import {getFetchingFavorite} from "@store/loading/selectors";

import Header from "@partials/header/header";
import Catalog from "@partials/catalog/catalog";
import Footer from "@partials/footer/footer";
import Loader from "@partials/loader/loader";

import withPrivateRoute from "@hocs/with-private-route/with-private-route";

class MyList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFavoriteMovies} = this.props;
    onLoadFavoriteMovies();
  }

  render() {
    const {favoriteMovies, isLoading} = this.props;

    if (isLoading) {
      return <Loader/>;
    }

    return (
      <div className="user-page">
        <Header
          classMods="user-page__head"
          title="My list"
          needUserBlock
        />

        <Catalog
          movies={favoriteMovies}
          headerClassMods="visually-hidden"
          sectionTitle="Catalog"
        />

        <Footer/>
      </div>
    );
  }

}

MyList.defaultProps = {
  favoriteMovies: [],
  onLoadFavoriteMovies: () => {},
  isLoading: false,
};

MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadFavoriteMovies: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
  isLoading: getFetchingFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteMovies: bindActionCreators(loadFavorite, dispatch)
});

export {MyList};

export default compose(
    withPrivateRoute,
    connect(mapStateToProps, mapDispatchToProps)
)(MyList);
