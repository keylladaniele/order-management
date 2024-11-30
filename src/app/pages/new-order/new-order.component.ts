import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-order',
  standalone: true,
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
  imports: [NgIf, ReactiveFormsModule]
})
export class NewOrderComponent {
  orderForm: FormGroup;
  currentStep: number = 1;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderService: OrderService
  ) {
    this.orderForm = this.fb.group({
      products: [null, Validators.required],
      customer: [null, Validators.required],
      paymentStatus: ['not-paid', Validators.required],
      orderDate: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.orderForm.valid) {
      this.currentStep++;
    } else {
      console.log('Por favor, preencha todos os campos.');
    }
  }

  prevStep() {
    this.currentStep--;
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const newOrder = this.orderForm.value;
      this.orderService.createOrder(newOrder);
      console.log('Pedido criado com sucesso!', newOrder);
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Formulário inválido');
    }
  }
}
