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
    if (this.isStepValid()) {
      this.currentStep++;
    } else {
      alert('Por favor, complete todos os campos obrigatórios antes de avançar.');
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.orderForm.get('products')?.value !== null;
      case 2:
        return this.orderForm.get('customer')?.value !== null;
      case 3:
        return (
          this.orderForm.get('orderDate')?.value &&
          this.orderForm.get('paymentStatus')?.value
        );
      default:
        return false;
    }
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const newOrder = this.orderForm.value;
      this.orderService.createOrder(newOrder);
      console.log('Pedido criado com sucesso!', newOrder);
      alert('Pedido criado com sucesso!');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Formulário inválido');
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
