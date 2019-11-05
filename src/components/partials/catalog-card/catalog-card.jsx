import React from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import VideoPlayer from "../video-player/video-player.jsx";
import {setCurrentMovie} from "../../../store/actions";

class CatalogCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoTimeout = null;
    this._playerRef = React.createRef();

    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleCardClick = this._handleCardClick.bind(this);

    this.state = {
      isVideoPlaying: false,
    };
  }

  componentWillUnmount() {
    this._handleMouseLeave();
  }

  render() {
    const {id, name, previewImage, previewVideoLink} = this.props.movie;
    const {isVideoPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._handleCardClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            ref={this._playerRef}
            link={previewVideoLink}
            poster={`/${previewImage}`}
            isPlaying={isVideoPlaying}
            muted
            width="280"
            height="180"
          />
          <h3 className="small-movie-card__title">
            <Link
              to={`/films/${id}`}
              className="small-movie-card__link"
            >
              {name}
            </Link>
          </h3>
        </div>
      </article>
    );
  }

  _handleMouseEnter() {
    this._videoTimeout = setTimeout(() => {
      this.setState({isVideoPlaying: true});
    }, 1000);
  }

  _handleMouseLeave() {
    clearTimeout(this._videoTimeout);
    this.setState({isVideoPlaying: false});
  }

  _handleCardClick() {
    const {onClickCard, history, movie} = this.props;
    const {id} = movie;

    history.push(`/films/${id}`);
    onClickCard(this.props.movie);
  }
}

CatalogCard.defaultProps = {
  movie: {},
  onClickCard: () => {},
};

CatalogCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string
  }).isRequired,
  onClickCard: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickCard: bindActionCreators(setCurrentMovie, dispatch),
  };
};

export {CatalogCard};
export default withRouter(connect(null, mapDispatchToProps)(CatalogCard));
