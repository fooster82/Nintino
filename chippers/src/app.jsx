import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './Pages';

export const App = () =>{
    return (
        <>
        <Switch>
            <Route exact path=''>
                <Pages.LandingPage />
            </Route>

            <Route path='/login'>
                <Pages.LoginPage />
            </Route>

            <Route path='/home'>
                <Pages.Homepage />
            </Route>

        </Switch>
        </>
    )
}
