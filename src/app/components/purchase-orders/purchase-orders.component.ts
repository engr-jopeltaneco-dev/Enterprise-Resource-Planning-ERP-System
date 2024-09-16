import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrderService, PurchaseOrder } from '../../services/purchase-order.service';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
  purchaseOrders: PurchaseOrder[] = [];
  purchaseOrderForm!: FormGroup;

  constructor(private fb: FormBuilder, private purchaseOrderService: PurchaseOrderService) {}

  ngOnInit(): void {
    this.loadPurchaseOrders();

    this.purchaseOrderForm = this.fb.group({
      supplierID: ['', Validators.required],
      productID: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      purchaseDate: ['', Validators.required],
    });
  }

  loadPurchaseOrders(): void {
    this.purchaseOrderService.getPurchaseOrders().subscribe(data => {
      this.purchaseOrders = data;
    });
  }

  addPurchaseOrder(): void {
    if (this.purchaseOrderForm.valid) {
      this.purchaseOrderService.createPurchaseOrder(this.purchaseOrderForm.value).subscribe(() => {
        this.loadPurchaseOrders();
        this.purchaseOrderForm.reset();
      });
    }
  }
}
