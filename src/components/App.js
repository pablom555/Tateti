import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameContainer from './../pages/GameContainer';
import NotFound from './NotFound';

const App = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={GameContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;