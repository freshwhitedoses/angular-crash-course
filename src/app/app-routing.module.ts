import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";

const routes: Routes = [
  {path:'', component:ProductPageComponent},
  {path:"about", component:AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
