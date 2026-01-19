import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'profile/:id/:name/:age', component: Profile},
    {path: '**', redirectTo: ''}
];
