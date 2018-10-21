import React, { PureComponent } from 'react';

import Rating from '../Rating';

class MovieCover extends PureComponent {
  render() {
    return (
      <div>
        <figure>
          <h1>
            <strong>{this.props.title}</strong>
          </h1>
          <img src={this.props.coverImage} alt="CoverImage" />
          <Rating rating={this.props.rating} />
          <a href={this.props.url}>{this.props.url}></a>
        </figure>
      </div>
    );
  }
}

export default MovieCover;
