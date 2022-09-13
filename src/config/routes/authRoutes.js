import {lazy} from 'react';
export const authRoutes = [
  {
    exact: true,
    path: '/profile',
    component: lazy(() => import('../../pages/profile')),
  },
  {
    exact: true,
    path: '/profile/edit',
    component: lazy(() => import('../../pages/profile/EditProfile')),
  },
  {
    exact: true,
    path: '/dashboard',
    component: lazy(() => import('../../pages/Dashboard')),
  },
  {
    exact: true,
    path: '/create',
    component: lazy(() => import('../../components/AddAdForm')),
  },
];
