import React, { PureComponent } from 'react';

import StarRatingComponent from 'react-star-rating-component';

import './index.css';

class MovieCover extends PureComponent {
  render() {
    const { title, coverImage, rating, url } = this.props;
    const ratingValue = (+rating.likes * 100) / (+rating.likes + +rating.dislikes) / 10;

    return (
      <div className="movie-cover">
        <img className="img-responsive" src={coverImage} alt={title} width="100%" />
        <div className="details">
          <div className="title">{title}</div>
          <StarRatingComponent name={title} starCount={10} value={ratingValue} />
        </div>
      </div>
    );
  }
}

export default MovieCover;
