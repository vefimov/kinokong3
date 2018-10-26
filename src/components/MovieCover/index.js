import React, { PureComponent } from 'react';

import Rating from '../Rating';

import './index.css';
import { Link } from 'react-router-dom';
import FilmDetails from '../../pages/FilmDetails';

class MovieCover extends PureComponent {
  render() {
    const { title, coverImage, rating, url } = this.props;
    return (
      <div className="movie-cover">
        <figure>
          <h2 className="title">
            <strong>{title}</strong>
          </h2>
          <Link to={`/movie/${url.replace('http://kinokong2.com/', '-')}`}>
            <img className="img-responsive" src={coverImage} alt={title} width="100%" />
          </Link>
          <a href={url}> Watch</a>
          <Rating rating={rating} />
        </figure>
      </div>
    );
  }
}

export default MovieCover;
