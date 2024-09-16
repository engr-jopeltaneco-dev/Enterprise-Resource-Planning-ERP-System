import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService, Customer } from '../../services/customer.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  customerForm!: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();

    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      contactInfo: ['', [Validators.required, Validators.maxLength(200)]],
      billingAddress: ['', [Validators.required, Validators.maxLength(200)]],
      creditLimit: [0, [Validators.required, Validators.min(0)]],
    });
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  addCustomer(): void {
    if (this.customerForm.valid) {
      this.customerService.createCustomer(this.customerForm.value).subscribe(() => {
        this.loadCustomers();
        this.customerForm.reset();
      });
    }
  }
}

