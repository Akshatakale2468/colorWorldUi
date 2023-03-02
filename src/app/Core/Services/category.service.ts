import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
//  API for Category //
  getCategory(): Observable<any> {
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetAllCategory")
  };

  postData(obj: any): Observable<any> {
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/AddCategory", obj)
  };

  editData():Observable<any>{
    return this.http.get("")
  };

  updateData(obj:any):Observable<any>{
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/UpdateCategory",obj)
  };

  deleteData(id:number,obj:any):Observable<any>{
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/DeleteCategory?id=" + id,obj)
  };

  // API for Customer //

  getAllCustomer():Observable<any>{
    return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetAllCustomer")
  };

  saveCustomer(obj:any):Observable<any>{
    return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/SaveCustomer", obj)
  }


// API for Item //

getItem():Observable<any>{
  return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetAllItemMaster")
};

postItemData(obj:any):Observable<any>{
  return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/AddItemMaster",obj)
};

editItemData(id:number):Observable<any>{
  return this.http.get("http://onlinetestapi.gerasim.in/api/StockApp/GetItemById?id="+id)
};

updateItemData(obj:any):Observable<any>{
  return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/UpdateItemMaster", obj)
};

deleteItemData(id:number,obj:any):Observable<any>{
  return this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/DeleteItemMaster?id="+id,obj)
};
}

