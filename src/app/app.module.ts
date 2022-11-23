import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {FormComponent} from "./components/form/form.component";

// определение маршрутов
const appRoutes: Routes =[
  { path: 'product', component: ProductComponent},
  { path: 'form', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
