import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./app.jsx"
import { BrowserRouter as Router } from 'react-router-dom';
import * as Pages from "./Pages"

ReactDOM.render(
    <Router>
        <Pages.LandingPage />

    </Router>,

    // <h1>hello</h1>,
    document.getElementById("root")
);
