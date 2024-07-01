import { Routes } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';

export const routes: Routes = [
    { path: '', redirectTo: '/userpage', pathMatch: 'full' },
    { path: 'userpage', component: UserpageComponent},
];
