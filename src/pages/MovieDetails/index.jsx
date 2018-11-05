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
    const { title, story, poster, movies, info, actor, producer } = movieDetails;

    return (
      <div className="movie-details">
        <Grid>
          <Row className="show-grid">
            <Col xs={10} md={4} mdOffset={1}>
              <Image src={poster} rounded width="300" />
            </Col>
            <Col className="description" xs={10} md={6}>
              <h1 className="title">{title}</h1>
              <div className="info">
                <div dangerouslySetInnerHTML={{ __html: info }} />
                <br />
                <div>{actor}</div>
                <br />
                <p>{producer}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={10} mdOffset={1}>
              <br />
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
