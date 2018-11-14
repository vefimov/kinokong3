import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Navigation from './components/Navigation';
import { getMenuItems } from './services/movies';
import Serials from './pages/Serials';
import Home from './pages/Home';
import NewFilms from './pages/NewFilms';
import MovieDetails from './pages/MovieDetails';
import SearchPage from './pages/SearchPage';

class App extends Component {
  async componentDidMount() {
    const menuItems = await getMenuItems();
    this.setState({ menuItems, loading: false });
  }
  render() {
    return (
      <div>
        <Router history={createHistory()}>
          <div>
            <Navigation menuItems={this.state.menuItems} />
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
