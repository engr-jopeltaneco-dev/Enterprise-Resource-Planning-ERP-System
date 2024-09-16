import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface InventoryItem {
  productID: number;
  productName: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryItemService {
  private apiUrl = 'http://localhost:5000/api/inventoryitems';

  constructor(private http: HttpClient) {}

  getInventoryItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.apiUrl);
  }

  getInventoryItem(id: number): Observable<InventoryItem> {
    return this.http.get<InventoryItem>(`${this.apiUrl}/${id}`);
  }

  createInventoryItem(item: InventoryItem): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(this.apiUrl, item);
  }

  updateInventoryItem(id: number, item: InventoryItem): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, item);
  }

  deleteInventoryItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
