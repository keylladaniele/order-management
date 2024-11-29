import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-order', component: NewOrderComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
