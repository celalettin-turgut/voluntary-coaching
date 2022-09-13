import {lazy} from 'react';

export const routes = [
  {
    exact: true,
    path: '/about',
    component: lazy(() => import('../../pages/About')),
  },

  {
    exact: true,
    path: '/signup',
    component: lazy(() => import('../../pages/Signup')),
  },
  {
    exact: true,
    path: '/signin',
    component: lazy(() => import('../../pages/Signin')),
  },
  {
    exact: true,
    path: '/project/:id',
    component: lazy(() => import('../../pages/Project')),
  },
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../../pages/Home')),
  },
];
