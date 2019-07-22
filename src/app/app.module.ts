import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetComponent } from './get/get.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
