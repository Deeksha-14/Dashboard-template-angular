import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products')
      .then(m => m.ProductsComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./components/users/users')
      .then(m => m.UsersComponent)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];