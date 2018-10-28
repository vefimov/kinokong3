import React, { Component } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';
import { getMovieDetails } from '../../services/title';
import FilmDetails from './index';

class FilmDis extends Component {
  state = {
    loading: true,
    movieDetails: [], // Initial value
  };

  async componentDidMount() {
    console.log(this.props);
    const { url } = this.props;
    const movieDetails = await getMovieDetails(url);
    this.setState({ movieDetails, loading: false });
  }

  renderMovieDatails() {
    return this.state.movieDetails.map(movieDetails => <FilmDetails key={movieDetails.url} {...movieDetails} />);
  }

  render() {
    return this.state.loading ? <LoadingSpinner /> : this.renderMovieDatails();
  }
}

export default FilmDis;
