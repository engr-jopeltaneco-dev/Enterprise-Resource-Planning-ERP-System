import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService, Employee } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();

    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      department: ['', Validators.required],
      hireDate: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(0)]],
    });
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(() => {
        this.loadEmployees();
        this.employeeForm.reset();
      });
    }
  }
}
