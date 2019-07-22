import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this
           .http
           .get(`${this.uri}/products`);
  }

  getCustomers() {
    return this
           .http
           .get(`${this.uri}/customers`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  
}
