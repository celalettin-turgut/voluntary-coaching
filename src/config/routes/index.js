import React from 'react';
import {routes} from './routes';
import {authRoutes} from './authRoutes';
import {Redirect, Switch, Route} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase';

const Routes = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        {authRoutes.map((route) =>
          user ? (
            <Route key={route.path} {...route} />
          ) : (
            <Redirect to='/signin' />
          )
        )}
      </Switch>
    </div>
  );
};

export default Routes;
