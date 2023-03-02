import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { categoryClass } from 'src/app/Core/Interfaces/category';
import { CategoryService } from 'src/app/Core/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoryArray: categoryClass[];
  categoryObj: categoryClass = new categoryClass();

  isSave: boolean = true;
  isForm: boolean = true;
  isLoading : boolean = true;

  constructor(private http: HttpClientModule, private service: CategoryService) {
    this.categoryArray = [];
  }

  
  onAdd() {
    this.isForm = false;
  };

  onClose() {
    this.isForm = true;
  };

  ngOnInit(): void {
    this.getAllRecords();
  };

  getAllRecords() {
    this.service.getCategory().subscribe((res: any) => {
      if(res.result){
        this.categoryArray = res.data;
        this.isLoading = false;
      }else {
        this.isLoading = false;
      }
      })
  };

  onSave() {
    this.service.postData(this.categoryObj).subscribe((res: any) => {
      if (res) {
        this.getAllRecords();
        alert(res.message);
      };
      this.onClose();
      this.onReset();
    })
  };

  onEdit(id: number) {
    this.onAdd();
    this.isSave = false;
    const categoryData = this.categoryArray.find(m => m.categoryId == id);
    if (categoryData != undefined) {
      this.categoryObj = categoryData;
    }
  };

  onUpdate(obj: any) {
    this.service.updateData(obj).subscribe((res: any) => {
      if (res.result) {
        this.getAllRecords();
        alert('Updated Successfully')
      } else {
        alert('Erroe Occured')
      }
      this.onClose();
      this.onReset();
      this.isSave = true;
    })
  };

  onDelete(id: number, obj: any) {
    this.service.deleteData(id, obj).subscribe((res: any) => {
      if (res) {
        this.getAllRecords();
        alert(res.message)
      }
    })
  };

  onReset() {
    this.categoryObj = new categoryClass();
  };
}
