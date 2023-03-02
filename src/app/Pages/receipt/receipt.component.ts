import { Component } from '@angular/core';
import { customerClass } from 'src/app/Core/Interfaces/customer';
import { receiptClass } from 'src/app/Core/Interfaces/receipt';
import { CategoryService } from 'src/app/Core/Services/category.service';
import { DealerService } from 'src/app/Core/Services/dealer.service';
import { ReceiptService } from 'src/app/Core/Services/receipt.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  receiptArray: receiptClass[];
  receiptObj: receiptClass;
  customerList: customerClass[];

  isForm: boolean = true;
  isLoading : boolean = true;

  constructor(private service: ReceiptService, private customer: CategoryService) {
    this.receiptArray = [];
    this.receiptObj = new receiptClass();
    this.customerList = [];
  }

  ngOnInit(): void {
    this.getAllPaymentRecord();
    this.getDpdlCustomerRecord();
  }

  onAdd() {
    this.isForm = false;
  };

  onClose() {
    this.isForm = true;
  };

  getAllPaymentRecord() {
    this.service.getAllPayment().subscribe((res: any) => {
      if(res.result){
        this.receiptArray = res.data;
        this.isLoading = false;
      } else {
        this.isLoading = false;
      }
      
    })
  };

  getDpdlCustomerRecord() {
    this.customer.getAllCustomer().subscribe((res: any) => {
      if (res.result) {
        this.customerList = res.data;
      }
    })
  }
  onSave() {
    this.service.addPayment(this.receiptObj).subscribe((res: any) => {
      if (res.result) {
        this.getAllPaymentRecord();
        alert(res.message)
      } else {
        alert('Error Occured')
      }
    })
    this.onClose();
    this.onReset();
  };

  onReset() {
    this.receiptObj = new receiptClass();
  };
}
