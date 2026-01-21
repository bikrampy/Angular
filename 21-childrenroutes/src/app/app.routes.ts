import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {
        path: 'user',
        loadComponent: () => import('./pages/user/user').then(m => m.User),
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                loadComponent: () => import('./pages/profile/profile').then(m => m.Profile)
            },
            {
                path: 'settings',
                loadComponent: () => import('./pages/settings/settings').then(m => m.Settings)
            }
        ]
    },
];
