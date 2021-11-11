import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {StoreUser} from "../../../models/storeUser.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  currentUser!: StoreUser;

  constructor(private authService: AuthenticationService,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getLoggedInUser();
  }

  public getRegDate() {
    return this.datePipe.transform(this.currentUser.regDate ? this.currentUser.regDate : new Date(),"dd.MM.yyyy");
  }

}
