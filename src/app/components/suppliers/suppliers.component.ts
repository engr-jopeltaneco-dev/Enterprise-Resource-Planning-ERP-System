import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService, Supplier } from '../../services/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SupplierComponent implements OnInit {
  suppliers: Supplier[] = [];
  supplierForm!: FormGroup;

  constructor(private fb: FormBuilder, private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.loadSuppliers();

    this.supplierForm = this.fb.group({
      supplierName: ['', Validators.required],
      address: [''],
      phoneNumber: [''],
      email: ['', [Validators.email]],
    });
  }

  loadSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(data => {
      this.suppliers = data;
    });
  }

  addSupplier(): void {
    if (this.supplierForm.valid) {
      this.supplierService.createSupplier(this.supplierForm.value).subscribe(() => {
        this.loadSuppliers();
        this.supplierForm.reset();
      });
    }
  }
}
