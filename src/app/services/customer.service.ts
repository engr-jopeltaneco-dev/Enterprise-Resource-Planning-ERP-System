import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Customer {
  customerID: number;
  name: string;
  contactInfo: string;
  billingAddress: string;
  creditLimit: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5000/api/customers';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)  // Add error handling
      );
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)  // Add error handling
      );
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer)
      .pipe(
        catchError(this.handleError)  // Add error handling
      );
  }

  updateCustomer(id: number, customer: Customer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, customer)
      .pipe(
        catchError(this.handleError)  // Add error handling
      );
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)  // Add error handling
      );
  }

  // Error handling method
  private handleError(error: HttpErrorResponse) {
    // Handle client-side or network error
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return observable with user-facing error message
    return throwError('Something went wrong; please try again later.');
  }
}
