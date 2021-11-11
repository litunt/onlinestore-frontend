import { Component } from '@angular/core';
import { CATEGORIES } from "./utils/utils";
import {Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";
import {CartService} from "./services/cart.service";
import {CartComponent} from "./components/cart/cart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  categories: any[] = CATEGORIES;

  private ALL_CATEGORIES: string = 'ALL CATEGORIES';

  constructor(private router: Router,
              private authService: AuthenticationService,
              private cartService: CartService) {
  }

  public isUserAuthenticated() {
    return this.authService.isUserLoggedIn();
  }

  public logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  public getNumberOfCartItems() {
    if (localStorage.getItem('numberOfCartItems')) {
      return parseInt(localStorage.getItem('numberOfCartItems')!);
    }
    return 0;
  }

  public isActive(currentPath: string): boolean {
    let path = this.router.url.split('/');
    return path[path.length - 1] === currentPath.toLowerCase();
  }

  public getPageTitle(): string {
    let path = this.router.url.split('/');
    let title = path[path.length - 1];
    if (title === 'categories') {
      return this.ALL_CATEGORIES;
    } else if (title === '') {
      return 'WELCOME TO PET STORE :)';
    }
    return title.toUpperCase();
  }

}
