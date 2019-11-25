import React from "react";
import {MovieTabs} from "@constants";

const withActiveTab = (Component) => {
  class WithActiveTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: MovieTabs.OVERVIEW
      };

      this._handleChangeTab = this._handleChangeTab.bind(this);
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          active={activeTab}
          onChangeTab={this._handleChangeTab}
        />
      );
    }

    _handleChangeTab(tab) {
      this.setState({activeTab: tab});
    }
  }

  const displayName = Component.displayName || Component.name;
  WithActiveTab.displayName = `WithActiveTab(${displayName})`;
  WithActiveTab.WrappedComponent = Component;

  return WithActiveTab;
};

export default withActiveTab;
