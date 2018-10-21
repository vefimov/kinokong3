import React, { PureComponent } from 'react';

class Rating extends PureComponent {
  render() {
    console.log(this.props);
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
