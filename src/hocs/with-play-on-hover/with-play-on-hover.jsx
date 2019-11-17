import React from "react";
import {MOVIE_PREVIEW_DELAY} from "@constants";

const withPlayOnHover = (Component) => {
  class WithPlayerOnHover extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoTimeout = null;

      this._handleMouseLeave = this._handleMouseLeave.bind(this);
      this._handleMouseEnter = this._handleMouseEnter.bind(this);

      this.state = {
        isVideoPlaying: false,
      };
    }

    componentWillUnmount() {
      this._handleMouseLeave();
    }

    render() {
      const {isVideoPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isVideoPlaying={isVideoPlaying}
          onEnter={this._handleMouseEnter}
          onLeave={this._handleMouseLeave}
        />
      );
    }

    _handleMouseEnter() {
      this._videoTimeout = setTimeout(() => {
        this.setState({isVideoPlaying: true});
      }, MOVIE_PREVIEW_DELAY);
    }

    _handleMouseLeave() {
      clearTimeout(this._videoTimeout);
      this.setState({isVideoPlaying: false});
    }
  }

  return WithPlayerOnHover;
};

export default withPlayOnHover;
