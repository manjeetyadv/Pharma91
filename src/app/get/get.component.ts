import { Component, OnInit } from '@angular/core';
import Product from '../product';
import Customer from '../product'
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  products: Product[];
  customers: Customer[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
    });

    this.ps
      .getCustomers()
      .subscribe((data: Customer[]) => {
        this.customers = data;
    });
  }

 
}

