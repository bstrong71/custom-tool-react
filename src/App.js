import React, { Component } from 'react';

// Route defines each page of the app
// HashRouter: routes pages with the # symbol for direct linking
import { Route, HashRouter } from 'react-router-dom';

// import Root component for all other pages to use to load
import Root from './Root';

import All from './All';
import Lathes from './Lathes';
import Mills from './Mills';


class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* base view for all other pages */}
        <Root>
          {/* Define unique route for the root to show */}
          {/* Show route when url matches /all */}
          {/* Render component titled All when route is active */}
          {/* Close Route at end of line because it has no inner content */}
          <Route path={"/all"} render={() => <All />} />
          <Route path={"/lathes"} render={() => <Lathes />} />
          <Route path={"/mills"} render={() => <Mills />} />

        </Root>
      </HashRouter>
    );
  }
}

export default App;
