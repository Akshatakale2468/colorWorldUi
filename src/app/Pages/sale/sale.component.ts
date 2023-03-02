import { Component } from '@angular/core';
import { sale, saleInterface, saleItem } from 'src/app/Core/Classes/sale';
import { itemClass } from 'src/app/Core/Interfaces/item';
import { CategoryService } from 'src/app/Core/Services/category.service';
import { SaleService } from 'src/app/Core/Services/sale.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  saleArray: saleInterface[];
  saleObj: sale;
  saleItemObj: saleItem;
  itemList: itemClass[];

  isForm: boolean = true;
  isTable: boolean = true;
  isShow:boolean = true;
  isLoading : boolean = true;

  constructor(private service: SaleService, private itmService: CategoryService) {
    this.saleArray = [];
    this.saleObj = new sale();
    this.saleItemObj = new saleItem();
    this.itemList = [];
  }

  ngOnInit(): void {
    this.getAllSaleRecord();
    this.getAllItemName();
  };

  onBill(){
    this.saleObj.outStandingAmount = parseInt(this.saleObj.totalInvoiceAmt) - parseInt (this.saleObj.discount);
  }

  onAdd() {
    this.isForm = false;
  };

  onClose() {
    this.isForm = true;
  };

  getAllSaleRecord() {
    this.service.getAllSale().subscribe((res: any) => {
      if(res.result){
        this.saleArray = res.data;
        this.isLoading = false;
      } else {
        this.isLoading = false;
      }
     })
  };

  getAllItemName() {
    this.itmService.getItem().subscribe((res: any) => {
      if(res.result){
        this.itemList = res.data
      }
    })
  };

  getItemName(id:number) {
    const itemData = this.itemList.find(m => m.itemId == id);
    return itemData?.itemName;
  };

  onAddData() {
    this.saleObj.totalItems = this.saleObj.saleItemMasters.length +1;
    this.saleObj.saleItemMasters.push(this.saleItemObj);
    this.saleItemObj = new saleItem();
    this.isTable = false;
  };

  onSave() {
    this.service.addSale(this.saleObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
        this.getAllSaleRecord();
      };
      this.onClose();
    })
  };

  onOpen(id:number){
    this.service.openSale(id).subscribe((res:any)=>{
        this.saleObj =res.data
    });
    this.isForm = false;
    this.isTable = false;
    this.isShow = false;
  }

  onDelete(id: number, obj: any) {
    this.service.deleteSale(id, obj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
        this.getAllSaleRecord();
      }
    })
  };

  availabelQuantity : number = 0;
  onStockCheck(){
    this.service.checkStockById(this.saleItemObj.itemId).subscribe((res:any)=>{
    this.availabelQuantity = res.data.quatity
    })
  };

onCheckQuantity() {
  if(this.availabelQuantity < this.saleItemObj.quantity) {
    alert('Available Quantity is only'+ this.availabelQuantity);
    this.saleItemObj.quantity = 0;
  } 
};

onMobileBlur(mobileNo:string){
  this.service.getAllMobile(mobileNo).subscribe((res:any)=>{
    if(res.data){
      this.saleObj = res.data
    }
  })
}
}