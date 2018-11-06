// @flow
import React, { Component } from 'react';

import LoadingSpinner from '../../components/LoadingSpinner';
import MoviesCarousel from '../../components/MoviesCarousel';
import { getMovieCoversGroupedByType } from '../../services/movies';

type Props = {};

type State = {
  loading: boolean,
  movieCoversGroupedByType: null | Array<{
    title: string,
    movieCovers: [
      {
        title: string,
        coverImage: string,
        rating: {
          likes: string,
          dislikes: string,
        },
        url: string,
      },
    ],
  }>,
};

class NewFilms extends Component<Props, State> {
  state = {
    loading: true,
    movieCoversGroupedByType: null,
  };

  async componentDidMount() {
    const movieCoversGroupedByType = await getMovieCoversGroupedByType('/index.php');

    this.setState({ movieCoversGroupedByType, loading: false });
  }

  render() {
    const { loading, movieCoversGroupedByType } = this.state;

    if (loading) return <LoadingSpinner />;

    return (movieCoversGroupedByType: any).map(type => (
      <MoviesCarousel key={type.title} title={type.title} movieCovers={type.movieCovers} />
    ));
  }
}

export default NewFilms;
