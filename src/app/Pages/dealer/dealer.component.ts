import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { dealerClass } from 'src/app/Core/Interfaces/dealer';
import { DealerService } from 'src/app/Core/Services/dealer.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent {
  dealerArray: dealerClass[];
  dealerObj: dealerClass = new dealerClass();

  isForm: boolean = true;
  isSave: boolean = true;
  isLoading : boolean = true;

  constructor(private http: HttpClient, private service: DealerService) {
    this.dealerArray = [];
  }

  onAdd() {
    this.isForm = false;
  };

  onClose() {
    this.isForm = true;
  };

  ngOnInit(): void {
    this.getAllDealerRecord();
  }

  getAllDealerRecord() {
    this.service.getDealer().subscribe((res: any) => {
      if(res.result){
        this.dealerArray = res.data;
        this.isLoading =false;
      } else {
        this.isLoading =false;
      }
    })
  };

  onSave() {
    this.service.postDealer(this.dealerObj).subscribe((res: any) => {
      if (res) {
        this.getAllDealerRecord();
        alert(res.message)
      };
    });
    this.onClose();
    this.onReset();
  };

  onEdit(id: number) {
    this.onAdd();
    this.isSave = false;
    const dealerData = this.dealerArray.find(m => m.dealerId == id);
    if (dealerData != undefined) {
      this.dealerObj = dealerData;
    }
  };

  onUpdate(obj: any) {
    this.service.updateDealer(obj).subscribe((res: any) => {
      if(res){
        this.getAllDealerRecord();
        alert(res.message)
      };
    })
    this.onClose();
    this.onReset();
  };

  onDelete(id:number,obj:any) {
     this.service.deleteDealer(id,obj).subscribe((res:any)=>{
      if(res){
        this.getAllDealerRecord();
        alert(res.message)
      };
    })
  };

  onReset() {
   this.dealerObj = new dealerClass();
  };
}
