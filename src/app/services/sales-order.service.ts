import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SalesOrder {
  orderID: number;
  customerID: number;
  productID: number;
  quantity: number;
  orderDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  private apiUrl = 'http://localhost:5000/api/salesorders';

  constructor(private http: HttpClient) {}

  getSalesOrders(): Observable<SalesOrder[]> {
    return this.http.get<SalesOrder[]>(this.apiUrl);
  }

  createSalesOrder(order: SalesOrder): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(this.apiUrl, order);
  }

  updateSalesOrder(id: number, order: SalesOrder): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, order);
  }

  deleteSalesOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
