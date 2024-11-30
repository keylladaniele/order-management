import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: any[] = [];  
  private ordersSubject: BehaviorSubject<any[]> = new BehaviorSubject(this.orders);

  constructor() {}

  getOrders(): Observable<any[]> {
    return this.ordersSubject.asObservable();
  }

  createOrder(order: any): void {
    this.orders.push(order);
    this.ordersSubject.next(this.orders);
  }

  getTotalOrders(): number {
    return this.orders.length;
  }
}
