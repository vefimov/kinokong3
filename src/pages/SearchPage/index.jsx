// @flow
import React, { Component } from 'react';

import { searchMovies } from '../../services/movies';

type Props = {
  match: {
    params: {
      query: string,
    },
  },
};

class SearchPage extends Component<Props> {
  async componentDidMount() {
    searchMovies(this.props.match.params.query);
  }

  render() {
    return <div>Searching for {this.props.match.params.query}</div>;
  }
}

export default SearchPage;
