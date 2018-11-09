import { Component, OnInit } from '@angular/core';

import { Model } from '../repository.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  model: Model = new Model();
  constructor() { }

  getClasses(): string {
    return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
  }

  ngOnInit() {
  }

}
