import { Component } from '@angular/core';
import { CATEGORIES } from "./utils/utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  categories: any[] = CATEGORIES;

  private ALL_CATEGORIES: string = 'ALL CATEGORIES';

  constructor(private router: Router) {
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
      return '';
    }
    return title.toUpperCase();
  }

}
