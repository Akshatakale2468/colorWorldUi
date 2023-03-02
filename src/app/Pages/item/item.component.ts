import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { categoryClass } from 'src/app/Core/Interfaces/category';
import { itemClass } from 'src/app/Core/Interfaces/item';
import { CategoryService } from 'src/app/Core/Services/category.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  itemList: itemClass[];
  categoryList: categoryClass[];
  itemObj: itemClass = new itemClass();

  isForm: boolean = true;
  isSave: boolean = true;
  isLoading: boolean = true;

  constructor(private http: HttpClient, private service: CategoryService) {
    this.itemList = [];
    this.categoryList = [];
  }

  onAdd() {
    this.isForm = false;
  };

  onClose() {
    this.isForm = true;
  };

  ngOnInit(): void {
    this.getAllItemRecord();
    this.getDpdlCategory();
  };

  getAllItemRecord() {
    this.service.getItem().subscribe((res: any) => {
      if(res.result){
        this.itemList = res.data;
        this.isLoading = false;
      } else {
        this.isLoading = false;
      }
    })
  };

  onSave() {
    this.service.postItemData(this.itemObj).subscribe((res: any) => {
      if (res) {
        this.getAllItemRecord();
        alert(res.message)
      }
    })
    this.onClose();
    this.onReset();
  };

  getDpdlCategory() {
    this.service.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  };

  onEdit(id: number) {
    this.service.editItemData(id).subscribe((res: any) => {
      this.itemObj = res.data;
      this.onAdd();
      this.isSave = false;
    })
  };

  onUpdate(obj: any) {
    this.service.updateItemData(obj).subscribe((res: any) => {
      if (res) {
        this.getAllItemRecord();
        alert(res.message)
      };
      this.onClose();
      this.onReset();
      this.isSave = true;
    })
  };

  onDelete(id: number, obj: any) {
    this.service.deleteItemData(id, obj).subscribe((res: any) => {
      if (res) {
        this.getAllItemRecord();
        alert(res.message)
      };
    })
  };

  onReset() {
    this.itemObj = new itemClass();
  };
}
