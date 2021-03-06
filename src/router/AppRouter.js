import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import DashboardPage from '../components/Dashboard';

export const history = createHistory();

const AppRouter = () => (
  <Router history = {history}>
    <div>
        <Switch>
        <PublicRoute path="/" component={DashboardPage}  exact={true}/>
        <Route component={ NotFoundPage } />
        </Switch>
    </div >
  </Router>
);

export default AppRouter;