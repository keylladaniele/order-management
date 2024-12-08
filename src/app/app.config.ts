import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'new-order', pathMatch: 'full' },
      { path: 'new-order', component: NewOrderComponent },
      { path: 'orders', component: OrderSummaryComponent },
    ]
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
