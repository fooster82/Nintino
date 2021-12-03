import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './Pages';

export default function App() {
    return (
        <>
            <h1>Welcome to Nintino</h1>
            <Pages.LandingPage />
            <Pages.LoginPage />
        </>
    )
}
