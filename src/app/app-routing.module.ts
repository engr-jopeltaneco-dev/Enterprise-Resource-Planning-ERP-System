import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { CustomersComponent } from './components/customers/customers.component';
import { InventoryItemsComponent } from './components/inventory-items/inventory-items.component';
import { SupplierComponent } from './components/suppliers/suppliers.component';
import { SalesOrderComponent } from './components/sales-orders/sales-orders.component';
import { PurchaseOrderComponent } from './components/purchase-orders/purchase-orders.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'inventory-items', component: InventoryItemsComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'sales-orders', component: SalesOrderComponent },
  { path: 'purchase-orders', component: PurchaseOrderComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
