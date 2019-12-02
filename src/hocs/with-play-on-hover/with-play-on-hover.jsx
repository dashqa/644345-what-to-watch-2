import React from "react";
import {MOVIE_PREVIEW_DELAY} from "@constants";

const withPlayOnHover = (Component) => {
  class WithPlayerOnHover extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoTimeout = null;
      this._videoRef = React.createRef();

      this._handleMouseLeave = this._handleMouseLeave.bind(this);
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
    }

    componentWillUnmount() {
      this._handleMouseLeave();
    }

    _handleMouseEnter() {
      this._videoTimeout = setTimeout(() => {
        this._videoRef.current.play();
      }, MOVIE_PREVIEW_DELAY);
    }

    _handleMouseLeave() {
      clearTimeout(this._videoTimeout);
      this._videoRef.current.load();
    }

    render() {
      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
          onEnter={this._handleMouseEnter}
          onLeave={this._handleMouseLeave}
        />
      );
    }
  }

  const displayName = Component.displayName || Component.name;
  WithPlayerOnHover.displayName = `WithPlayerOnHover(${displayName})`;

  return WithPlayerOnHover;
};

export default withPlayOnHover;
