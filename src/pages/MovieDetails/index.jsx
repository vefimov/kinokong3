import React, { Component } from 'react';
import { Col, Grid, Image, Row } from 'react-bootstrap';

import './index.css';
import LoadingSpinner from '../../components/LoadingSpinner';
import { getMovieDetails } from '../../services/movies';

export default class MovieDetails extends Component {
  state = {
    loading: true,
    movieDetails: {},
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const movieDetails = await getMovieDetails(`/${id}`);

    this.setState({ movieDetails, loading: false });
  }

  renderMovieDetails() {
    const { movieDetails } = this.state;
    const { title, story, poster, movies } = movieDetails;

    return (
      <div className="movie-details">
        <Grid>
          <Row className="show-grid">
            <Col xs={10} md={4} mdOffset={1}>
              <Image src={poster} rounded width="300" />
            </Col>
            <Col className="description" xs={10} md={6}>
              <h1 className="title">{title}</h1>
              <ul className="info">
                <li>Жанр</li>
                <li>Год выпуска</li>
                <li>Актеры</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={10} mdOffset={1}>
              <h1 className="title">{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: story }} />
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={10} mdOffset={1}>
              <div className="embed-responsive embed-responsive-16by9">
                <video controls>
                  <source src={movies[0]} type="video/mp4" />
                </video>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return loading ? <LoadingSpinner /> : this.renderMovieDetails();
  }
}
