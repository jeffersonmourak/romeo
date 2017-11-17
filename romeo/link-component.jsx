import React from 'react';
import _ from 'lodash';

class LinkComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick() {
    history.pushState({}, 'romeo_navigation', this.props.href);
    window.dispatchEvent(new Event('ROMEO_NAV'));
  }
  render() {
    return (
      <a href="javascript:void(0)" onClick={this::this.onClick}>
        {this.props.children}
      </a>
    );
  }
}

export default LinkComponent;
