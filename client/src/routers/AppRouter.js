import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import PrivateRoute from './PrivateRoute';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PrivateRoute path="/" component={Dashboard} exact={true}/>
            <Route path="/login" component={Login} exact={true}/>
        </Switch>
    </Router>
);

export default AppRouter;