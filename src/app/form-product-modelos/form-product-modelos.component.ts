import { ApplicationRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from '../repository.model';
import { Product } from '../product.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormGroup } from '../form.model';

@Component({
  selector: 'app-form-product-modelos',
  templateUrl: './form-product-modelos.component.html',
  styleUrls: ['./form-product-modelos.component.css']
})
export class FormProductModelosComponent implements OnInit {

    model: Model = new Model();
    form: ProductFormGroup = new ProductFormGroup();
    selectedProduct: String;
    newProduct: Product = new Product();
    formSubmitted: Boolean = false;

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

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log('New Product: ' + this.jsonProduct);
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
}
