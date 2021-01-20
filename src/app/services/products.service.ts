import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient) { }

  getAllProductsUrl = 'api/products/all';
  getCertainProduct = "api/products";
  addPrductUrl = "api/products/sell";
  modifyProductUrl = "api/products/modify-product";
  deleteProductUrl =  "api/products";


  // getAllProducts(): {
  //   const url = this.getAllProducts;
  //   var response = this.http.get<Product[]>(url);
  //   return response;
  // }
}
