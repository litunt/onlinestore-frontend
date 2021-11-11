import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.less']
})
export class ErrorHandlerComponent implements OnInit {

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
  }

  public handleError(errorMessage: string) {
    this.message.create('error', errorMessage);
  }

}
