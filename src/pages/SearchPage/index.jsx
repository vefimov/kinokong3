/* eslint-disable no-use-before-define */
// @flow
import React, { Component } from 'react';
import { searchMovies } from '../../services/movies';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCoverComponent from '../../components/MovieCover';

import type { MovieCover } from '../../types';

type Props = {
  match: {
    params: {
      query: string,
    },
  },
};

type State = {
  loading: boolean,
  movieCovers: MovieCover[],
};

class SearchPage extends Component<Props, State> {
  state: State = {
    loading: true,
    movieCovers: [],
  };

  async componentDidMount() {
    const movieCovers = await searchMovies(this.props.match.params.query);
    this.setState({ movieCovers, loading: false });
  }

  async componentDidUpdate(prevProps: Props) {
    const { query } = this.props.match.params;
    if (query !== prevProps.match.params.query) {
      this.setState({ loading: true });

      const movieCovers = await searchMovies(query);
      this.setState({ movieCovers, loading: false });
    }
  }

  render() {
    const { loading, movieCovers } = this.state;

    if (loading) return <LoadingSpinner />;

    return (movieCovers: any).map(movieCover => (
      <MovieCoverComponent className="pull-left" key={movieCover.url} {...movieCover} />
    ));
  }
}

export default SearchPage;
