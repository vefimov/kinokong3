import React, { PureComponent } from 'react';

import './index.css';

class Rating extends PureComponent {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-default">
          {this.props.rating.likes}
        </button>
        <button type="button" className="btn btn-default">
          {this.props.rating.dislikes}
        </button>
      </div>
    );
  }
}

export default Rating;
