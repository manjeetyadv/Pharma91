import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GetComponent } from './get/get.component';


const routes: Routes = [
  {
    path: 'api/products',
    component: GetComponent
  },
  {
    path: 'api/customers',
    component: GetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
