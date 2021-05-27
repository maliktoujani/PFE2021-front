import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiServerUrl=environment.apiBaseUrl+'/admin/user';

  constructor(private http:HttpClient, private router:Router) {}

  authenticate(username:string, password:string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<string>(`${this.apiServerUrl}/login`,{headers, responseType:'text' as 'json'}).pipe(
    map(
      userData => {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        return userData;
      }
    )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  getLoggedUser(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.http.get<any>(`${this.apiServerUrl}/${sessionStorage.getItem('username')}`,{headers});
  }

  logOut() {
    sessionStorage.removeItem('username');
    this.router.navigate(['']);
  }
}