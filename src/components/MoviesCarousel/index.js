// @flow
import React, { Component } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import './index.css';
import MovieCover from '../MovieCover';

type Props = {
  title: string,
  movieCovers: [
    {
      title: string,
      coverImage: string,
      rating: {
        likes: string,
        dislikes: string,
      },
      url: string,
    },
  ],
};

type State = {
  sliding: boolean,
};

export default class MoviesCarousel extends Component<Props, State> {
  state: State = {
    sliding: false,
  };

  settings = {
    accessibility: true,
    centerMode: false,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    swipe: true,
    swipeToSlide: true,
    variableWidth: true,
    slidesToScroll: 3,
    displayPrevArrow: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          swipe: true,
          dots: false,
          infinite: true,
          speed: 500,
          arrows: false,
          variableWidth: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  render() {
    const { movieCovers, title } = this.props;
    const { sliding } = this.state;

    return (
      <div className={classNames('movies-carousel', { sliding })}>
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
