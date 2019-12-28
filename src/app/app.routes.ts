import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    ],
  },
];
