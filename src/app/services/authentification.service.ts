import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiServerUrl=environment.apiBaseUrl+'/user';

  constructor(private httpClient:HttpClient, private router:Router) {}

  authenticate(username:string, password:string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<string>(`${this.apiServerUrl}/login`,{headers, responseType:'text' as 'json'}).pipe(
    map(
      userData => {
        sessionStorage.setItem('username',username);
        return userData;
      }
    )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    this.router.navigate(['']);
  }

}