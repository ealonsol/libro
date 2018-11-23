import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { ProductComponent } from './product/product.component';
import { FormProductValidComponent } from './form-product-valid/form-product-valid.component';
import { FormProductModelosComponent } from './form-product-modelos/form-product-modelos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFormComponent,
    FormProductValidComponent,
    FormProductModelosComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
