import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'reabertura', component: AppComponent },
  { path: '', redirectTo: '/reabertura', pathMatch: 'full' },
  { path: '**', redirectTo: '/reabertura' },
];
