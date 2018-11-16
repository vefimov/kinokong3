/* eslint-disable no-use-before-define */
// @flow
import React, { Component } from 'react';
import { searchMovies } from '../../services/movies';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCoverComponent from '../../components/MovieCover';

import type { MovieCover } from '../../types';
import { Grid, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/es/Col';

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

  renderSearchDetails() {
    const { movieCovers } = this.state;

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            {(movieCovers: any).map(movieCover => (
              <Col xs={6} sm={3} md={3} lg={2}>
                <MovieCoverComponent key={movieCover.url} {...movieCover} />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    if (loading) return <LoadingSpinner />;

    return this.renderSearchDetails();
  }
}

export default SearchPage;
