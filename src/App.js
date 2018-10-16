import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import './App.css';
import Navigation from './components/Navigation';
import config from './config';

const Home = () => <h1>Hello from the Home page</h1>;
const Films = () => <h1>Hello from the Films page</h1>;

class App extends Component {
  render() {
    return (
      <Router history={createHistory()}>
        <Navigation menuItems={config.navMenuItems} />;
        <div>
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
