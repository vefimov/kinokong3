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
          <Link to={url}>
            <img className="img-responsive" src={coverImage} alt={title} width="100%" />
          </Link>
          <a href={url}>dsfgsdg</a>
          <Rating rating={rating} />
        </figure>
      </div>
    );
  }
}

export default MovieCover;
