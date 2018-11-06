import React, { Component } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';
import MoviesCarousel from '../../components/MoviesCarousel';
import { getMovieCovers, getMovieCoversGroupedByType } from '../../services/movies';

class NewFilms extends Component {
  state = {
    loading: true,
    movieCoversGroupedByType: null,
  };

  async componentDidMount() {
    const movieCoversGroupedByType = await getMovieCoversGroupedByType('/index.php');

    this.setState({ movieCoversGroupedByType, loading: false });
  }

  render() {
    const { loading, movieCoversGroupedByType } = this.state;

    if (loading) return <LoadingSpinner />;

    return movieCoversGroupedByType.map(type => <MoviesCarousel title={type.title} movieCovers={type.movieCovers} />);
  }
}

export default NewFilms;
