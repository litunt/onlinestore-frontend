import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DatePipe, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from "ng-zorro-antd/card";
import { CategoryCardComponent } from './components/categories/category-card/category-card.component';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import {ProductsService} from "./services/products.service";
import {NzBackTopModule} from "ng-zorro-antd/back-top";
import { ProductsComponent } from './components/products/products.component';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import { LoginComponent } from './components/store-user/login/login.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import { RegisterComponent } from './components/store-user/register/register.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {RegistrationService} from "./services/registration.service";
import {AuthenticationService} from "./services/authentication.service";
import { ProfileComponent } from './components/store-user/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {CartService} from "./services/cart.service";
import {NzListModule} from "ng-zorro-antd/list";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import { OrdersComponent } from './components/orders/orders.component';
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {OrdersService} from "./services/orders.service";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import {NzMessageService} from "ng-zorro-antd/message";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryCardComponent,
    ProductCardComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent,
    OrdersComponent,
    ProductDetailsComponent,
    ErrorHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzDividerModule,
    NzCardModule,
    NzCarouselModule,
    NzBackTopModule,
    NzBreadCrumbModule,
    StoreModule.forRoot({}, {}),
    NzInputModule,
    ReactiveFormsModule,
    NzWaveModule,
    NzButtonModule,
    NzFormModule,
    NzCheckboxModule,
    NzSelectModule,
    NzBadgeModule,
    NzAvatarModule,
    NzListModule,
    NzInputNumberModule,
    NzCollapseModule,
    NzModalModule,
    NzPaginationModule,
    NzPopoverModule,
    NzToolTipModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ProductsService,
    RegistrationService,
    AuthenticationService,
    CartService,
    CartComponent,
    DatePipe,
    OrdersService,
    ErrorHandlerComponent,
    NzMessageService
  ]
})
export class AppModule { }
