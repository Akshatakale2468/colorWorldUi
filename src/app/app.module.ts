import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CategoryComponent } from './Pages/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './Core/Guard/auth.guard';
import { ItemComponent } from './Pages/item/item.component';
import { DealerComponent } from './Pages/dealer/dealer.component';
import { PurchaseComponent } from './Pages/purchase/purchase.component';
import { SaleComponent } from './Pages/sale/sale.component';
import { StockComponent } from './Pages/stock/stock.component';
import { CustomerComponent } from './Pages/customer/customer.component';
import { HideDeleteDirective } from './Core/Directives/hide-delete.directive';
import { AlertComponent } from './Shared/Reusable Components/alert/alert.component';
import { ReceiptComponent } from './Pages/receipt/receipt.component';
import { LedgerComponent } from './Pages/ledger/ledger.component';
import { LoaderComponent } from './Shared/Reusable Components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CategoryComponent,
    ItemComponent,
    DealerComponent,
    PurchaseComponent,
    SaleComponent,
    StockComponent,
    CustomerComponent,
    HideDeleteDirective,
    AlertComponent,
    ReceiptComponent,
    LedgerComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
