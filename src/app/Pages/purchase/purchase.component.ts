import { Component, OnInit } from '@angular/core';
import { purchase, purchaseArray, purchaseItem } from 'src/app/Core/Classes/purchase';
import { dealerClass } from 'src/app/Core/Interfaces/dealer';
import { itemClass } from 'src/app/Core/Interfaces/item';
import { CategoryService } from 'src/app/Core/Services/category.service';
import { DealerService } from 'src/app/Core/Services/dealer.service';
import { PurchaseService } from 'src/app/Core/Services/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchaseArray: purchaseArray[];
  purchaseObj: purchase;
  dealerArray: dealerClass[];
  itemList: itemClass[];
  purchaseItemObj: purchaseItem;

  isForm: boolean = true;
  isTable:boolean = true;
  isShow:boolean = true;
  isLoading : boolean = true;

  constructor(private service: DealerService, private itemserv: CategoryService, private purService: PurchaseService) {
    this.purchaseArray = [];
    this.purchaseObj = new purchase();
    this.purchaseItemObj = new purchaseItem();
    this.dealerArray = [];
    this.itemList = [];
  };

  ngOnInit(): void {
    this.getAllPurchaseRecord();
    this.getAllDealerRecord();
    this.getAllItemRecord();
  };

  onAddForm() {
    this.isForm = false;
  };

  onClose() {
    this.isForm = true;
  };

  getAllPurchaseRecord() {
    this.purService.getPurchase().subscribe((res: any) => {
      if (res.result) {
        this.purchaseArray = res.data;
        this.isLoading = false;
      } else{
        this.isLoading = false;
      }
    })
  };

  getAllDealerRecord() {
    this.service.getDealer().subscribe((res: any) => {
      if (res.result) {
        this.dealerArray = res.data
      }
    })
  };

  getAllItemRecord() {
    this.itemserv.getItem().subscribe((res: any) => {
      this.itemList = res.data;
    })
  };

  onAdd() {
    debugger
    this.purchaseObj.totalItems = this.purchaseObj.purchaseItemMasters.length + 1;
    this.purchaseObj.purchaseItemMasters.push(this.purchaseItemObj);
    this.purchaseItemObj = new purchaseItem();
    this.isTable = false;
  };

  onOpen(id:number){
    this.purService.openPurchaseById(id).subscribe((res:any)=>{
      this.purchaseObj = res.data
    })
    this.isForm = false;
    this.isTable = false;
    this.isShow = false;
  };

  getItemName(id:number){
    const itemData = this.itemList.find(m => m.itemId == id);
    return itemData?.itemName;
  }

  onSave() {
    this.purService.addPurchase(this.purchaseObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getAllPurchaseRecord();
      }
    })
    this.isForm = true;
    this.purchaseObj = new purchase();
  };

  onDelete(id: number,obj:any) {
    this.purService.deletePurchase(id,obj).subscribe((res: any) => {
      if (res) {
        alert(res.message)
        this.getAllPurchaseRecord;
       }
    })
  }
}

