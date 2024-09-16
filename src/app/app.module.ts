import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CustomersComponent } from './components/customers/customers.component';
import { InventoryItemsComponent } from './components/inventory-items/inventory-items.component';
import { SupplierComponent } from './components/suppliers/suppliers.component';
import { SalesOrderComponent } from './components/sales-orders/sales-orders.component';
import { PurchaseOrderComponent } from './components/purchase-orders/purchase-orders.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';  // Added MatToolbarModule

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
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesComponent,
    CustomersComponent,
    InventoryItemsComponent,
    SupplierComponent,
    SalesOrderComponent,
    PurchaseOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) // Enable fetch API for HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
