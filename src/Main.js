import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';

const Signup = lazy(() => import('./components/Signup'));
const Signin = lazy(() => import('./components/Signin'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Profile = lazy(() => import('./components/profile'));

const Main = () => {
  return (
    <div className='main-content'>
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
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
