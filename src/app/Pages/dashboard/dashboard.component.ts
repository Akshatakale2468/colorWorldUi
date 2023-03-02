import { Component } from '@angular/core';
import { dashboardClass } from 'src/app/Core/Interfaces/dashboard';
import { DashboardService } from 'src/app/Core/Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
dashboard : dashboardClass[];
dashboardObj : dashboardClass;

constructor(private service : DashboardService){
  this.dashboard = [];
  this.dashboardObj = new dashboardClass();
};

ngOnInit():void{
this.getAllDashboardRecord();
};

getAllDashboardRecord(){
  this.service.getAllDashboard().subscribe((res:any)=>{
    this.dashboardObj = res.data[0];
  })
}
}
