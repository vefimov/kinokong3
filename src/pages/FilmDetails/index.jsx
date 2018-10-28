import React, { Component } from 'react';

import { Col, Grid, Image, Row } from 'react-bootstrap';
import './index.css';

class FilmDetails extends Component {
  render() {
    const { title, story } = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={10} md={4} mdOffset={1}>
            <Image
              src="http://kinokong2.com/uploads/posts/2018-06/1529074875-640255182-supersemeyka-2.jpg"
              rounded
              width="300"
            />
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
            <p>{story}</p>
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
