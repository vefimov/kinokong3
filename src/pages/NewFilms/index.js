import React, { Component } from 'react';
import MoviesCarousel from '../../components/MoviesCarousel';
import { getMovieCovers } from '../../services/movies';
import LoadingSpinner from '../../components/LoadingSpinner';

class New extends Component {
  state = {
    loading: true,
    movieCovers: [], // Initial value
  };

  async componentDidMount() {
    const movieCovers = await getMovieCovers('/film/novinki-kinos/');
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

export default New;
