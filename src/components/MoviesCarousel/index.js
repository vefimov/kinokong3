import React, { Component } from 'react';
import './index.css';
import Slider from 'react-slick';

import MovieCover from '../MovieCover';

export default class MoviesCarousel extends Component {
  settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    speed: 500,
    arrows: false,
    variableWidth: true,
    swipeToSlide: true,
  };

  render() {
    const { movieCovers, title } = this.props;

    return (
      <div className="movies-carousel">
        <h1 className="text">{title}</h1>
        <Slider {...this.settings}>
          {movieCovers.map(movieCover => (
            <div style={{ width: 180 }} key={movieCover.url}>
              <MovieCover {...movieCover} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
