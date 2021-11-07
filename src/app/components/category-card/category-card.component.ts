import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.less']
})
export class CategoryCardComponent implements OnInit {

  @Input() cardTitle: string = "Title";

  constructor() { }

  ngOnInit(): void {
  }

  public getImageUrl(): string {
    return `/assets/${this.cardTitle.toLowerCase()}.png`;
  }

}
