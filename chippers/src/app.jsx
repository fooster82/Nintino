import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './Pages';

export const App = () =>{
    return (
        <>
        <Switch>
            <Route exact path='/'>
                <Pages.Homepage />
            </Route>
            <Route path='/chippers'>
                <Pages.ChippersPage />
            </Route>


        </Switch>
        </>
    )
}