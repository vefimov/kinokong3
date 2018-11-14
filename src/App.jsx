// @flow
import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Navigation from './components/Navigation';
import LoadingSpinner from './components/LoadingSpinner';
import { getMenuItems } from './services/movies';
import Serials from './pages/Serials';
import Home from './pages/Home';
import NewFilms from './pages/NewFilms';
import MovieDetails from './pages/MovieDetails';
import SearchPage from './pages/SearchPage';

import type { MenuItem } from './types';

type Props = {};
type State = {
  loading: boolean,
  menuItems: MenuItem[],
};

class App extends Component<Props, State> {
  state: State = {
    loading: true,
    menuItems: [],
  };

  async componentDidMount() {
    const menuItems = await getMenuItems();

    this.setState({ menuItems, loading: false });
  }

  render() {
    const { loading, menuItems } = this.state;

    return loading ? (
      <LoadingSpinner />
    ) : (
      <div>
        <Router history={createHistory()}>
          <div>
            <Navigation menuItems={menuItems} />
            <Route exact path="/" component={Home} />
            <Route path="/serials" component={Serials} />
            <Route path="/novelty" component={NewFilms} />
            <Route path="/movie/:id" component={MovieDetails} />
            <Route path="/search/:query" component={SearchPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
