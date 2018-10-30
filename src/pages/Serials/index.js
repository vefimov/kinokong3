import React, { Component } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';
import MoviesCarousel from '../../components/MoviesCarousel';
import { getMovieCovers } from '../../services/movies';

class Serials extends Component {
  state = {
    loading: true,
    movieCovers: [], // Initial value
  };

  async componentDidMount() {
    const movieCovers = await getMovieCovers('/series/');

    this.setState({ movieCovers, loading: false });
  }

  renderMovieCovers() {
    const { movieCovers } = this.state;

    return (
      <div>
        <MoviesCarousel movieCovers={movieCovers} />

        <hr />
      </div>
    );
  }

  render() {
    return this.state.loading ? <LoadingSpinner /> : this.renderMovieCovers();
  }
}

export default Serials;
