import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Users } from './components/users/users';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'users', component: Users},
    {path: 'profile/:id', component: Profile},
    {path: '**', redirectTo: ''}
];
