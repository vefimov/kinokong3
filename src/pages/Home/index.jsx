import React, { Component } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';
import SimpleSlider from '../../components/Slick';
import { getMovieCovers } from '../../services/movies';
import MovieCover from '../../components/MovieCover';

class Home extends Component {
  state = {
    loading: true,
    movieCovers: [], // Initial value
  };

  async componentDidMount() {
    const movieCovers = await getMovieCovers('/film/novinki-kinos/');

    this.setState({ movieCovers, loading: false });
  }

  renderMovieCovers() {
    return this.state.movieCovers.map(movieCover => <MovieCover key={movieCover.url} {...movieCover} />);
  }

  render() {
    return this.state.loading ? <LoadingSpinner /> : this.renderMovieCovers();
  }
}

export default Home;
