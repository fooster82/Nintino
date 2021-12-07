import React from 'react';
import ReactDOM from 'react-dom';
import * as Pages from "./Pages"
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app.jsx';


ReactDOM.render(
  <React.StrictMode>

      <Router basename="games">
        <App/>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);