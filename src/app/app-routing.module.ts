import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/Guard/auth.guard';
import { CategoryComponent } from './Pages/category/category.component';
import { CustomerComponent } from './Pages/customer/customer.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DealerComponent } from './Pages/dealer/dealer.component';
import { HomeComponent } from './Pages/home/home.component';
import { ItemComponent } from './Pages/item/item.component';
import { LedgerComponent } from './Pages/ledger/ledger.component';
import { LoginComponent } from './Pages/login/login.component';
import { PurchaseComponent } from './Pages/purchase/purchase.component';
import { ReceiptComponent } from './Pages/receipt/receipt.component';
import { SaleComponent } from './Pages/sale/sale.component';
import { StockComponent } from './Pages/stock/stock.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {
    path:'',
    component:HomeComponent,
    canActivate: [AuthGuard],
    children:[
      {path:"dashboard", component:DashboardComponent},
      {path:"category", component:CategoryComponent},
      {path:"item", component:ItemComponent},
      {path:"customer", component:CustomerComponent},
      {path : "dealer", component:DealerComponent},
      {path:"purchase",component:PurchaseComponent},
      {path:"sale",component:SaleComponent},
      {path: "stock", component: StockComponent},
      {path : "receipt", component : ReceiptComponent},
      {path: "ledger", component: LedgerComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
