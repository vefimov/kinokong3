import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Home page,width films!</h1>
      </div>
    );
  }
}

export default Home;
