import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AllPostsComponent } from '../all-posts/all-posts.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'all-posts', component: AllPostsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
