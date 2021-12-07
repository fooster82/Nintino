import React from 'react';
import ReactDOM from 'react-dom';
import * as Pages from "./Pages"
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app.jsx';
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={pieces}>
      <Router basename="games">
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);