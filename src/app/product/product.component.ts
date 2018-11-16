import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Model } from '../repository.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  model: Model = new Model();
  fontSizeWithUnits: String = '30px';
  fontSizeWithoutUnits: String = '30';
  targetName: String = 'Kayak';

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  getProductByPosition(position: number): Product {
      return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
      const product = this.getProductByPosition(position);
      return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
      return this.model.getProducts();
  }
  getProductCount(): number {
      return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }

  /*
  getClasses(): string {
    return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
  }*/

  getClasses(key: number): string {
    const product = this.model.getProduct(key);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getClassMap(key: number): Object {
    const product = this.model.getProduct(key);
    return {
        'text-center bg-danger': product.name === 'Kayak',
        'bg-info': product.price < 50
    };
  }

  getStyles(key: number) {
    const product = this.model.getProduct(key);
    return {
        fontSize: '30px',
        'margin.px': 40,
        color: product.price > 50 ? 'red' : 'green'
    };
  }

  ngOnInit() {
  }

}
