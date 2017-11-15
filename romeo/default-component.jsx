import React from 'react';

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
    return (<div>
      { this.romeo.getCurrent().content }
      </div>);
  }
}

export default DefaultComponent;
