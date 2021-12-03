import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';

export default function App() {
    return (
        <>
            <h1>Welcome to Nintino</h1>
            <LandingPage />
        </>
    )
}
