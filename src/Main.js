import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';

const Signup = lazy(() => import('./components/Signup'));
const Signin = lazy(() => import('./components/Signin'));
const Dashboard = lazy(() => import('./components/Dashboard'));

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/signin'>
          <Signin />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
