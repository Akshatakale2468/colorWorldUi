import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http : HttpClient) { }

  getAllPayment():Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetAllPayments")
  };

  addPayment(obj:any):Observable<any>{
    return this.http.post("https://onlinetestapi.gerasim.in/api/StockApp/AddPayment",obj)
  }

  // API For Ledger//

  getLedgerById(id:number):Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetCustomerLedgerById?id="+id)
  }
}
