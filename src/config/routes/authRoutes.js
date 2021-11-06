import {lazy} from 'react';
export const authRoutes = [
  {
    exact: true,
    path: '/profile',
    component: lazy(() => import('../../components/profile')),
  },
  {
    exact: true,
    path: '/dashboard',
    component: lazy(() => import('../../components/Dashboard')),
  },
];
