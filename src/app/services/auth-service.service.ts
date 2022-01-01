import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public cachedRequests: Array<HttpRequest<any>> = [];
  public token: any = localStorage.getItem('customerToken');
  constructor(public http: HttpClient) {
  }
  public getToken(): string|null {

    //if(this.token)
    //return this.token;
    //else
    let token : string | null;
    token = localStorage.getItem('customerToken');
    return token;
  }

  public getUserData(){
    return JSON.parse(localStorage.getItem('customerLogin')!);
  }
}
