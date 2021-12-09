import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './Pages';

export const App = () =>{


        return (
    
            <>
                <Switch>
                    <Route exact path='/'>
                        <Pages.Homepage />
                    </Route>
                    
                    <Route path='/chippers' >
                        <Pages.ChippersPage />
                    </Route>
                        
                    <Route path="/lobby">
                        <Pages.Lobby/>
                    </Route>

                    <Route path="/comingsoon">
                        <Pages.ComingSoon />
                    </ Route>

                    <Route path="/winnersPage">
                        <Pages.WinnerPage />
                    </Route>
                
                    <Route>
                        <h1>Not found</h1>
                    </Route>
        
                </Switch>
            </>
        );

}

