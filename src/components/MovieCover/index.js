// @flow
import React, { PureComponent } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

import './index.css';

type Props = {
  title: string,
  coverImage: string,
  rating: {
    likes: string,
    dislikes: string,
  },
  url: string,
};

class MovieCover extends PureComponent<Props> {
  render() {
    const { title, coverImage, rating, url } = this.props;
    const ratingValue = (+rating.likes * 100) / (+rating.likes + +rating.dislikes) / 10;

    return (
      <Link to={url} className="movie-cover">
        <div className="content-components">
          <div className="image-container">
            <img className="img-responsive" src={coverImage} alt={title} width="100%" />
            <div className="overlay">
              <span className="glyphicon glyphicon-play" aria-hidden="true" />
            </div>
          </div>
          <div className="details">
            <div className="title">{title}</div>
            <StarRatingComponent name={title} starCount={10} value={ratingValue} />
          </div>
        </div>
      </Link>
    );
  }
}

export default MovieCover;
