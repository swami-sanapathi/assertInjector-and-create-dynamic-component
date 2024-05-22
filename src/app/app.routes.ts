import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dynamic-component',
        loadComponent: () => import('./dynamic-component/dynamic.component'),
    },
    {
        path: 'injection-context',
        loadComponent: () => import('./injection-context/injection-context.component'),
    },
    {
        path: 'address-form',
        loadComponent: () => import('./features/address-form/address-form.component'),
    },
    {
        path: 'view-details',
        loadComponent: () => import('./features/address-form/view-address-form-details.component'),
    },
    {
        path: 'products/:id',
        loadComponent: () => import('./features/products/products.component'),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
    },
];
