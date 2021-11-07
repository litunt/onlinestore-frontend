import { Component, OnInit } from '@angular/core';
import {CATEGORIES } from "../../utils/utils";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
