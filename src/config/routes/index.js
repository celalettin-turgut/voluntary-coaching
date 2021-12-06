import React, {lazy} from 'react';
import {routes} from '@config/routes/routes';
import {authRoutes} from '@config/routes/authRoutes.js';
import {Redirect, Switch, Route} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase';
const Routes = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route}></Route>
        ))}
        {authRoutes.map((route) => (
          <Route key={route.path} {...route}>
            {!user ? <Redirect to='/signin' /> : null}
          </Route>
        ))}
        <Route component={lazy(() => import('@components/NotFound'))} />
      </Switch>
    </div>
  );
};

export default Routes;
