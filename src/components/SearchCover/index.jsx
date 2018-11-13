// @flow
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';

type Props = {
  title: string,
  coverImage: string,
  url: string,
  history: Array<any>,
};

class SearchCover extends PureComponent<Props> {
  mouseX: 0;

  handleMouseDown = (event: MouseEvent) => {
    this.mouseX = (event.clientX: any);
  };

  handleMouseUp = (event: MouseEvent) => {
    if (this.mouseX === event.clientX) {
      this.props.history.push(this.props.url);
    }
  };

  render() {
    const { title, coverImage } = this.props;

    return (
      <div className="movie-cover" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
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
}

export default withRouter(SearchCover);
