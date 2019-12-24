import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }],
  },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];
