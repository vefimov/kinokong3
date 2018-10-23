import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import config from './components/config';
import SimpleSlider from './components/Slick';
import Serials from './pages/Serials';
import Home from './pages/Home';
import New from './pages/NewFilms';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentDidMount() {
    setTimeout(() => this.hideMenu(), 2000);
  }

  hideMenu() {
    this.setState({ show: false });
  }
  render() {
    return this.state.show ? (
      <LoadingSpinner />
    ) : (
      <div>
        <Router history={createHistory()}>
          <div>
            <Navigation menuItems={config.navMenuItems} />
            <SimpleSlider />
            <Route exact path="/films" component={Home} />
            <Route path="/serials" component={Serials} />
            <Route path="/novelty" component={New} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
