import {lazy} from 'react';
export const authRoutes = [
  {
    exact: true,
    path: '/profile',
    component: lazy(() => import('@components/profile')),
  },
  {
    exact: true,
    path: '/profile/edit',
    component: lazy(() => import('@components/profile/EditProfile')),
  },
  {
    exact: true,
    path: '/dashboard',
    component: lazy(() => import('@components/Dashboard')),
  },
];
