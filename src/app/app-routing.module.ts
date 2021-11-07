import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {FoodComponent} from "./components/categories/food/food.component";
import {AccessoriesComponent} from "./components/categories/accessories/accessories.component";
import {ToysComponent} from "./components/categories/toys/toys.component";
import {ClothingComponent} from "./components/categories/clothing/clothing.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/food', component: FoodComponent },
  { path: 'categories/accessories', component: AccessoriesComponent },
  { path: 'categories/toys', component: ToysComponent },
  { path: 'categories/clothing', component: ClothingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
