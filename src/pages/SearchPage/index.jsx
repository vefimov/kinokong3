/* eslint-disable no-use-before-define */
// @flow
import React, { Component } from 'react';
import { searchMovies } from '../../services/movies';
import LoadingSpinner from '../../components/LoadingSpinner';
import SearchCover from '../../components/SearchCover';

type Props = {
  match: {
    params: {
      query: string,
    },
  },
};

class SearchPage extends Component<Props> {
  state = {
    loading: true,
    movieCover: [],
  };

  async componentDidMount() {
    searchMovies(this.props.match.params.query);
    const movieCover = searchMovies('/index.php');
    this.setState({ movieCover, loading: false });
  }

  render() {
    console.log(this.state);
    const { loading, movieCover } = this.state;

    if (loading) return <LoadingSpinner />;

    return movieCover.map(movieCover => <SearchCover {...movieCover} />);
  }
}

export default SearchPage;
