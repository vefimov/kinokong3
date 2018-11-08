// @flow
import React, { PureComponent } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { withRouter } from 'react-router-dom';

import './index.css';

type Props = {
  title: string,
  coverImage: string,
  rating: {
    likes: string,
    dislikes: string,
  },
  url: string,
  history: Array<any>,
};

class MovieCover extends PureComponent<Props> {
  mouseX: 0;

  handleMouseDown = (event: MouseEvent) => {
    this.mouseX = (event.clientX: any);
  };

  handleMouseUp = (event: MouseEvent) => {
    if (this.mouseX === event.clientX) {
      this.props.history.push(this.props.url);
    }
  };

  render() {
    const { title, coverImage, rating } = this.props;
    const ratingValue = (+rating.likes * 100) / (+rating.likes + +rating.dislikes) / 10;

    return (
      <div className="movie-cover" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
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
    );
  }
}

export default withRouter(MovieCover);
