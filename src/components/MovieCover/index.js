import React, { PureComponent } from 'react';

import Rating from '../Rating';

import './index.css';

class MovieCover extends PureComponent {
  render() {
    return (
      <div className="movie-cover">
        <figure>
          <h2 className="title">
            <strong>{this.props.title}</strong>
          </h2>
          <img className="img-responsive" src={this.props.coverImage} alt="CoverImage" width="100%" />
          <Rating rating={this.props.rating} />
          <a href={this.props.url}>Online</a>
        </figure>
      </div>
    );
  }
}

export default MovieCover;
