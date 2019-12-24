import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    ],
  },
];
