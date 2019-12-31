import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }],
  },
];
