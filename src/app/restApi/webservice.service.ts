import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoriqueAppel } from './historiqueappel.service';

export interface WebService {
  id:number;
  url:string;
  format:string;
  methodeHttp:string;
  historiqueAppels:HistoriqueAppel[];
}

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  private apiServerUrl=environment.apiBaseUrl+'/webservice';
  constructor(private http: HttpClient) { }

  public getAllWebServices(): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/all`,{headers});
  }

  public addWebService(webservice: WebService): Observable<WebService>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<WebService>(`${this.apiServerUrl}/add`,webservice,{headers});
  }

  public updateWebService(webservice: WebService): Observable<WebService>{
    return this.http.put<WebService>(`${this.apiServerUrl}/update`,webservice);
  }

  public deleteWebService(webServiceId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${webServiceId}`);
  }
}



