import React, { PureComponent } from 'react';

import Rating from '../Rating';

import './index.css';
import { Link } from 'react-router-dom';

class MovieCover extends PureComponent {
  render() {
    const { title, coverImage, rating, url } = this.props;

    return (
      <div className="movie-cover">
        <figure>
          <h2 className="title">
            <strong>{title}</strong>
          </h2>
          <img className="img-responsive" src={coverImage} alt={title} width="100%" />
          <Rating rating={rating} />
          <Link to="/movie">Watch</Link>
        </figure>
      </div>
    );
  }
}

export default MovieCover;
