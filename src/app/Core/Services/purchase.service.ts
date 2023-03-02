import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http : HttpClient) { }

  getPurchase():Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetAllPurchase")
  };

  addPurchase(obj:any):Observable<any>{
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/AddPurchase",obj)
  };

  openPurchaseById(id:number):Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetPurchaseById?id="+id)
  }

  deletePurchase(id:number,obj:any):Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/DeletePurchaseId?id="+id,obj)
  };
}
