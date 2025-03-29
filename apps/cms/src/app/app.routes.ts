import type { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/landing/landing.routes').then(m => m.LANDING_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/platform/platform.routes').then(m => m.PLATFORM_ROUTES),
  },
];
