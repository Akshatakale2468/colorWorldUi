import { Component } from '@angular/core';
import { customerClass } from 'src/app/Core/Interfaces/customer';
import { CategoryService } from 'src/app/Core/Services/category.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customerArray: customerClass[];
  customerObj: customerClass;

  isForm: boolean = true;
  isLoading : boolean = true;

  constructor(private service: CategoryService) {
    this.customerArray = [];
    this.customerObj = new customerClass();
  };

  ngOnInit(): void {
    this.getAllCustomerRecord();
  };

  onAdd() {
    this.isForm = false;
  };

  onClose() {
    this.isForm = true
  };

  getAllCustomerRecord() {
    this.service.getAllCustomer().subscribe((res: any) => {
      if(res.result){
        this.customerArray = res.data;
        this.isLoading = false;
      } else {
        this.isLoading = false;
      }
    })
  };

  onSave() {
    this.service.saveCustomer(this.customerObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
        this.getAllCustomerRecord();
      }
      this.onClose();
      this.onReset();
    })
  };

  onReset() {
    this.customerObj = new customerClass();
  }
}
