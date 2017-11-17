import React from 'react';
import _ from 'lodash';

class DefaultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.romeo = props.romeo;

    this.romeo.subscribe(this::this.onStateChange);
  }

  onStateChange() {
    this.setState(this.romeo.store.getState());
  }

  render() {
    let current = this.romeo.getCurrent();
    let content = _.get(current, 'content') || <h1> 404 </h1>
    return (<div>
      { content }
      </div>);
  }
}

export default DefaultComponent;
