import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http :HttpClient) { }

  getAllSale():Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetAllSale")
  };

  addSale(obj:any):Observable<any>{
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/AddSale",obj)
  };

  deleteSale(id:number, obj:any):Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/DeleteSaleById?id="+id,obj)
  };

  openSale(id:number):Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetSaleById?id="+id)
  };

  checkStockById(id:number):Observable<any>{
return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/CheckStockByItemId?id=" + id)
  };

  getAllMobile(mobileno:string):Observable<any>{
    return this.http.get(" https://onlinetestapi.gerasim.in/api/StockApp/getCustomerByMobNo?mobileno=" +mobileno )
  }
  
  // Stock Api

  getAllStock():Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetAllStock")
  };
}
