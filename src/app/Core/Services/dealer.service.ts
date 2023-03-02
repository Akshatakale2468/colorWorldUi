import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealerService {
  getPurchase() {
    throw new Error('Method not implemented.');
  }

  constructor(private http :HttpClient) { }

  getDealer():Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetAllDealerMasters")
  };

  postDealer(obj:any):Observable<any>{
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/AddDealerMasters",obj)
  };

  editDealer():Observable<any>{
    return this.http.get("")
  };

  updateDealer(obj:any):Observable<any>{
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/UpdateDealerMasters" ,obj)
  };

  deleteDealer(id:number, obj:any):Observable<any>{
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/DeleteDealerById?id=" + id,obj)
  };
}

