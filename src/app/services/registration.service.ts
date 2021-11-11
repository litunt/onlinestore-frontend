import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserRegistration} from "../models/userRegistration.model";
import {Observable} from "rxjs";

@Injectable()
export class RegistrationService {

  private authUrl: string = '/api/auth';
  private registrationUrl: string = this.authUrl + '/register';

  constructor(private http: HttpClient) {

  }

  public registerNewUser(newUser: UserRegistration): Observable<any> {
    return this.http.post(this.registrationUrl, newUser);
  }
}
