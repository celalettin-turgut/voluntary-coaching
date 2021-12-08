import {lazy} from 'react';

export const routes = [
  {
    exact: true,
    path: '/signup',
    component: lazy(() => import('@pages/Signup')),
  },
  {
    exact: true,
    path: '/signin',
    component: lazy(() => import('@pages/Signin')),
  },
  {
    exact: true,
    path: '/',
    component: lazy(() => import('@pages/Home')),
  },
];
