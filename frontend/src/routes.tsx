import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Map from './pages/Map';
import ListAlertsAll from './pages/ListAlertsAll';
import ListAlertsUnit from './pages/ListAlertsUnit';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Map}/>
            <Route path="/map" exact component={Map}/>
            <Route path="/list/alerts-all" exact component={ListAlertsAll}/>
            <Route path="/list/alerts-unit" exact component={ListAlertsUnit}/>
        </BrowserRouter>
    );
}

export default Routes;