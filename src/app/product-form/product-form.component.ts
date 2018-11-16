import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Model } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  model: Model = new Model();
  selectedProduct: String;

  constructor() { }

  ngOnInit() {
  }

  getProduct(key: number): Product {
      return this.model.getProduct(key);
  }
  getProducts(): Product[] {
      return this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }

}
