import { Component } from '@angular/core';
import { stockClass } from 'src/app/Core/Interfaces/stock';
import { SaleService } from 'src/app/Core/Services/sale.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
stockArray : stockClass[];

isLoading: boolean = true;

constructor(private service: SaleService){
  this.stockArray = [];
};

ngOnInit():void {
this.getAllStockRecord();
};

getAllStockRecord(){
  this.service.getAllStock().subscribe((res:any)=>{
    if(res.result){
      this.stockArray = res.data;
      this.isLoading = false;
    }else {
      this.isLoading = false;
    }
    
  })
}
}
