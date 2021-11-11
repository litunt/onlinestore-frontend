import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserCredentials} from "../models/userCredentials.model";
import {Router} from "@angular/router";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authUrl: string = '/api/auth';
  private loginUrl: string = this.authUrl + '/login';
  USER_DATA = 'authenticatedUser'

  public username: string = '';
  public password: string = '';

  constructor(private http: HttpClient,
              private router: Router,
              private errorHandler: ErrorHandlerComponent) {

  }

  login(username: string, password: string) {
    let credentials: UserCredentials = {
      username,
      password
    }
    return this.http.post(this.loginUrl, credentials).subscribe((res) => {
        this.registerSuccessfulLogin(res);
        this.redirectToMainPage();
      },
      errorResponse => {
        this.errorHandler.handleError(errorResponse.error.message);
      });
  }

  private registerSuccessfulLogin(user: any) {
    sessionStorage.setItem(this.USER_DATA, JSON.stringify(user));
  }

  private redirectToMainPage() {
    this.router.navigate(['/categories']);
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_DATA)
    return user !== null;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_DATA)
    if (user === null) return '';
    return JSON.parse(user).username;
  }

  getLoggedInUserId() {
    let user = sessionStorage.getItem(this.USER_DATA)
    if (user === null) return -1;
    return JSON.parse(user).userId;
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem(this.USER_DATA)
    if (user === null) return null;
    return JSON.parse(user);
  }
}
