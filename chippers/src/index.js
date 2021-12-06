import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./app.jsx"
import { BrowserRouter as Router } from 'react-router-dom';
import * as Pages from "./Pages"

ReactDOM.render(
    <Router>
        <App />

    </Router>,

    document.getElementById("root")
);
