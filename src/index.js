import React from 'react';
import registerServiceWorker from './registerServiceWorker';

// import basic render function from original react-dom
import { render } from "react-dom";

// import App component
import App from './App';

// bootstrap and other styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// render to page
render(<App />, document.getElementById('root'));
registerServiceWorker();
