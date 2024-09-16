import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryItemService, InventoryItem } from '../../services/inventory-item.service';

@Component({
  selector: 'app-inventory-items',
  templateUrl: './inventory-items.component.html',
  styleUrls: ['./inventory-items.component.scss']
})
export class InventoryItemsComponent implements OnInit {
  inventoryItems: InventoryItem[] = [];
  inventoryItemForm!: FormGroup;

  constructor(private fb: FormBuilder, private inventoryItemService: InventoryItemService) {}

  ngOnInit(): void {
    this.loadInventoryItems();

    this.inventoryItemForm = this.fb.group({
      productName: ['', Validators.required],
      description: [''],
      quantity: [0, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]]
    });
  }

  loadInventoryItems(): void {
    this.inventoryItemService.getInventoryItems().subscribe(data => {
      this.inventoryItems = data;
    });
  }

  addInventoryItem(): void {
    if (this.inventoryItemForm.valid) {
      this.inventoryItemService.createInventoryItem(this.inventoryItemForm.value).subscribe(() => {
        this.loadInventoryItems();
        this.inventoryItemForm.reset();
      });
    }
  }
}
