import React, { Component } from 'react';

// Route defines each page of the app
// HashRouter: routes pages with the # symbol for direct linking
import { Route, HashRouter } from 'react-router-dom';

// import Navigation Component
import { Button } from 'reactstrap';
import Navigation from './Navigation';


class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* Navigation */}
        <Navigation />
      </HashRouter>
    );
  }
}

export default App;
