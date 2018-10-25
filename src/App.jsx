import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Navigation from './components/Navigation';
import config from './components/config';
import Serials from './pages/Serials';
import Home from './pages/Home';
import NewFilms from './pages/NewFilms';
import FilmDetails from './pages/FilmDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createHistory()}>
          <div>
            <Navigation menuItems={config.navMenuItems} />
            <Route exact path="/" component={Home} />
            <Route path="/serials" component={Serials} />
            <Route path="/novelty" component={NewFilms} />
            <Route path="/movie/:id" component={FilmDetails} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
