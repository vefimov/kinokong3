import React, { Component } from 'react';
import './index.css';

class LoadingSpinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          className="spinner-image"
          src="http://www.incsports.com.au/wp-content/uploads/2016/03/inc_grey-400x400.png"
          alt=""
        />
      </div>
    );
  }
}

export default LoadingSpinner;
