import React, { Component } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';
import MoviesCarousel from '../../components/MoviesCarousel';
import { getMovieCovers } from '../../services/movies';

class NewFilms extends Component {
  state = {
    loading: true,
    movieCovers: [], // Initial value
  };

  async componentDidMount() {
    const movieCovers = await getMovieCovers('/film/');

    this.setState({ movieCovers, loading: false });
  }

  renderMovieCovers() {
    const { movieCovers } = this.state;

    return (
      <div>
        <MoviesCarousel title="Новинки кино" movieCovers={movieCovers} />
      </div>
    );
  }

  render() {
    return this.state.loading ? <LoadingSpinner /> : this.renderMovieCovers();
  }
}

export default NewFilms;
