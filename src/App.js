import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import config from './config';

class App extends Component {
  render() {
    return <Navigation menuItems={config.navMenuItems} />;
  }
}
export default App;
