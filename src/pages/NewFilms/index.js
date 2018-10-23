import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>New Films !!</h1>
      </div>
    );
  }
}

export default New;
