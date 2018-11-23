import { ApplicationRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from '../repository.model';
import { Product } from '../product.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-product-modelos',
  templateUrl: './form-product-modelos.component.html',
  styleUrls: ['./form-product-modelos.component.css']
})
export class FormProductModelosComponent implements OnInit {

  model: Model = new Model();
  selectedProduct: String;
  newProduct: Product = new Product();

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

  getValidationMessages(state: any, thingName?: string) {
    const thing: string = state.path || thingName;
    const messages: string[] = [];
    if (state.errors) {
      for (const errorName in state.errors) {
        switch (errorName) {
          case 'required':
              messages.push(`You mas enter a ${thing}`);
              break;
          case 'minlength':
              messages.push(`A ${thing} mas be at least
                  ${state.errors['minlength'].requiredLength}
                  characters`);
              break;
          case 'pattern':
              messages.push(`The ${thing} contains
                  ilegal characters`);
              break;
        }
      }
    }
    return messages;
  }
  formSubmitted: boolean = false;
    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }

  getFormValidationMessages(form: NgForm): string[] {
      let messages: string[] = [];
      Object.keys(form.controls).forEach(k => {
          this.getValidationMessages(form.controls[k], k)
              .forEach(m => messages.push(m));
      });
      return messages;
  }

}
