import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigateToNewOrder() {
    this.router.navigate(['dashboard/new-order']);
  }

  navigateToOrders() {
    this.router.navigate(['dashboard/orders']);
  }

  navigateToClients() {
    this.router.navigate(['dashboard/clients']);
  }

  navigateToReports() {
    this.router.navigate(['dashboard/reports']);
  }
}
