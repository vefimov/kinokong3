import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import MovieCover from './components/MovieCover';
import Navigation from './components/Navigation';
import config from './config';

const movies = [
  {
    url: '/films/film1',
    title: 'Неудержимые',
    coverImage: 'http://kinokong2.com/uploads/posts/2014-07/thumbs/1406569802_335b2769b9a37b069279eda866ddfb1d.jpg',
    rating: {
      likes: '2',
      dislikes: '3',
    },
  },
  {
    url: '/films/film2',
    title: 'Экстаз',
    coverImage: 'http://kinokong2.com/uploads/posts/2014-07/thumbs/1406569802_335b2769b9a37b069279eda866ddfb1d.jpg',
    rating: {
      likes: '3',
      dislikes: '5',
    },
  },
  {
    url: '/films/film3',
    title: 'Мстители',
    coverImage: 'http://kinokong2.com/uploads/posts/2014-07/thumbs/1406569802_335b2769b9a37b069279eda866ddfb1d.jpg',
    rating: {
      likes: '2',
      dislikes: '3',
    },
  },
  {
    url: '/films/film4',
    title: 'Халк',
    coverImage: 'http://kinokong2.com/uploads/posts/2014-07/thumbs/1406569802_335b2769b9a37b069279eda866ddfb1d.jpg',
    rating: {
      likes: '2',
      dislikes: '3',
    },
  },
  {
    url: '/films/film5',
    title: 'Тор',
    coverImage: 'http://kinokong2.com/uploads/posts/2014-07/thumbs/1406569802_335b2769b9a37b069279eda866ddfb1d.jpg',
    rating: {
      likes: '2',
      dislikes: '3',
    },
  },
];

const Home = () => (
  <div>
    {movies.map(movies => (
      <MovieCover
        key={movies.url}
        title={movies.title}
        url={movies.url}
        rating={movies.rating}
        coverImage={movies.coverImage}
      />
    ))}
  </div>
);

const Films = () => <h1>Hello from the Films page</h1>;

class App extends Component {
  render() {
    return (
      <Router history={createHistory()}>
        <div>
          <Navigation menuItems={config.navMenuItems} />;
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/films" component={Films} />
        </div>
      </Router>
    );
  }
}

export default App;
