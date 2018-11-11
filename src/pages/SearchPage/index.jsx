/* eslint-disable no-use-before-define */
// @flow
import React, { Component } from 'react';

import { searchMovies } from '../../services/movies';
import LoadingSpinner from '../../components/LoadingSpinner';

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
    searchMovies: [],
  };

  async componentDidMount() {
    const searchMovies = await searchMovies('/index.php');
    this.setState({ searchMovies, loading: false });
    searchMovies(this.props.match.params.query);
  }

  renderSearch() {
    const { searchMovies } = this.state;
    const { title, coverImage } = searchMovies;

    return (
      <div className="movie-cover">
        <div className="image-container">
          <img className="img-responsive" src={coverImage} alt={title} width="100%" />
          <div className="overlay">
            <span className="glyphicon glyphicon-play" aria-hidden="true" />
          </div>
        </div>
        <div className="details">
          <div className="title">{title}</div>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return loading ? <LoadingSpinner /> : this.renderSearch;
  }
}

export default SearchPage;
