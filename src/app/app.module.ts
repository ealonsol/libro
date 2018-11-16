import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
