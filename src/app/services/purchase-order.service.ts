import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PurchaseOrder {
  purchaseOrderID: number;
  supplierID: number;
  productID: number;
  quantity: number;
  purchaseDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  private apiUrl = 'http://localhost:5000/api/purchaseorders';

  constructor(private http: HttpClient) {}

  getPurchaseOrders(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>(this.apiUrl);
  }

  createPurchaseOrder(order: PurchaseOrder): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>(this.apiUrl, order);
  }

  updatePurchaseOrder(id: number, order: PurchaseOrder): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, order);
  }

  deletePurchaseOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
