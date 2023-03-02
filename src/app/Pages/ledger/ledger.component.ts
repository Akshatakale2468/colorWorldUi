import { Component } from '@angular/core';
import { customerClass } from 'src/app/Core/Interfaces/customer';
import { ledgerClass } from 'src/app/Core/Interfaces/ledger';
import { CategoryService } from 'src/app/Core/Services/category.service';
import { ReceiptService } from 'src/app/Core/Services/receipt.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent {
  customerList : customerClass[];
  ledgerArray : ledgerClass[];
  ledgerObj : ledgerClass;

  isLoading : boolean = true;
  totalDebit : number = 0;
  totalCredit : number = 0;

  constructor(private service : CategoryService, private ledgerS : ReceiptService){
    this.customerList = [];
    this.ledgerArray = [];
    this.ledgerObj = new ledgerClass();
  }

  ngOnInit():void{
    this.getDpdlCustRecord();
  };

  getDpdlCustRecord(){
    this.service.getAllCustomer().subscribe((res:any)=>{
      if(res.result){
        this.customerList = res.data;
        this.isLoading = false;
      }else {
        this.isLoading = false;
      }
    })
  };

  onGetLedger(id:number){
    this.ledgerS.getLedgerById(id).subscribe((res:any)=>{
       if(res.result){
        this.ledgerArray = res.data;
       }
    })
  }; 

  onCalculation(){
    this.totalDebit = 0;
    this.totalCredit = 0;
  }
}
