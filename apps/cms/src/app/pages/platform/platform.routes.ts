import { Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';

export const PLATFORM_ROUTES: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
      },
    ],
  },
];
