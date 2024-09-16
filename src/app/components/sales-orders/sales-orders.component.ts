import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesOrderService, SalesOrder } from '../../services/sales-order.service';

@Component({
  selector: 'app-sales-orders',
  templateUrl: './sales-orders.component.html',
  styleUrls: ['./sales-orders.component.scss']
})
export class SalesOrderComponent implements OnInit {
  salesOrders: SalesOrder[] = [];
  salesOrderForm!: FormGroup;

  constructor(private fb: FormBuilder, private salesOrderService: SalesOrderService) {}

  ngOnInit(): void {
    this.loadSalesOrders();

    this.salesOrderForm = this.fb.group({
      customerID: ['', Validators.required],
      productID: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      orderDate: ['', Validators.required],
    });
  }

  loadSalesOrders(): void {
    this.salesOrderService.getSalesOrders().subscribe(data => {
      this.salesOrders = data;
    });
  }

  addSalesOrder(): void {
    if (this.salesOrderForm.valid) {
      this.salesOrderService.createSalesOrder(this.salesOrderForm.value).subscribe(() => {
        this.loadSalesOrders();
        this.salesOrderForm.reset();
      });
    }
  }
}
