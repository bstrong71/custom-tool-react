import React from 'react';

// Navigation is needed on every page, so it's here
import Navigation from './Navigation';


export default class Root extends React.Component {

  render() {
    return(
      <div>
        {/* include Navigation component on each page */}
        <Navigation />

        {/* Wrap page content in container-fluid class */}
        {/* this.props.children refers to all child elements of Root */}
        {/* child elements can be found in App.js inside <Root> </Root> */}
        <div className="container-fluid">{this.props.children}</div>
      </div>
    )
  }

}
