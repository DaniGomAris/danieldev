import { Routes } from '@angular/router';
import { Empty } from './shared/empty/empty';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Empty },
  { path: 'about', component: Empty },
  { path: 'projects', component: Empty },
  { path: 'blog', component: Empty },
  { path: 'certifications', component: Empty },
  { path: 'contact', component: Empty },
];
