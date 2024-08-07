import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'login', loadComponent: ()=> import('./pages/login/login.component')},
    {path: 'register', loadComponent: ()=> import('./pages/register/register.component')},
    {path: 'forgot-password', loadComponent: ()=> import('./pages/forgot-password/forgot-password.component')},
    {path: 'home', loadComponent: ()=> import('./pages/home/home.component')},
    {path: 'reset', loadComponent: ()=> import('./pages/reset/reset.component')},
    {path: 'reset/:token', loadComponent: ()=> import('./pages/reset/reset.component')}
];
