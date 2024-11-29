import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  imports: [NgFor, CommonModule]
})
export class OrderSummaryComponent {
  orderDetails = {
    customer: 'Exemplo Cliente',
    products: [
      { name: 'Cuscuz completo', quantity: 2, price: 3.25 },
      { name: 'Bolo frito', quantity: 1, price: 2.50 }
    ],
    total: 9.00,
    paymentStatus: 'Pendente'
  };
}
