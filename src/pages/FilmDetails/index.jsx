import React, { Component } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';
import { getMovieCovers } from '../../services/movies';
import MovieCover from '../../components/MovieCover';
import { Col, Grid, Image, Row } from 'react-bootstrap';
import './index.css';

class FilmDetails extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={10} md={4} mdOffset={1}>
            <Image
              src="https://mir24.tv/uploaded/images/2017/December/dc976ec848368fe8ca7f5212316fc7f438c802d421b410d6ade1da7d6fa41ace.jpg"
              rounded
              width="300"
            />
          </Col>
          <Col className="description" xs={10} md={6}>
            <h1 className="title">Movie name</h1>
            <ul className="info">
              <li>Жанр</li>
              <li>Год выпуска</li>
              <li>Актеры</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={10} mdOffset={1}>
            <h1>Movie name</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur excepturi, nesciunt nobis
              quo rem repellendus sed voluptates! Alias autem est facere magni nihil provident qui quidem rem
              repudiandae! Deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque aut cum
              debitis doloremque, excepturi hic in ipsum iusto minima molestias odit provident, quae, quaerat recusandae
              sint tempore veritatis vero.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={10} mdOffset={1}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FilmDetails;