import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';
  @Input() imgUrl: string = '';
  @Output() cancelCallback: EventEmitter<any> = new EventEmitter<any>();
  @Output() okCallback: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public cancel() {
    this.cancelCallback.emit();
  }

  public ok() {
    this.okCallback.emit();
  }

}
