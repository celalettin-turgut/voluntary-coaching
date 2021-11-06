import {lazy} from 'react';

export const routes = [
  {
    exact: true,
    path: '/signup',
    component: lazy(() => import('../../components/Signup')),
  },
  {
    exact: true,
    path: '/signin',
    component: lazy(() => import('../../components/Signin')),
  },
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../../components/Home')),
  },
];
