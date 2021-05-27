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

  private apiServerUrl=environment.apiBaseUrl+'/admin/webservice';
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });

  constructor(private http: HttpClient) { }

  public getAllWebServices(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`,{'headers': this.headers});
  }

  public addWebService(webservice: WebService): Observable<WebService>{
    return this.http.post<WebService>(`${this.apiServerUrl}/add`,webservice,{'headers': this.headers});
  }

  public updateWebService(webservice: WebService): Observable<WebService>{
    return this.http.put<WebService>(`${this.apiServerUrl}/update`,webservice,{'headers': this.headers});
  }

  public deleteWebService(webServiceId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${webServiceId}`,{'headers': this.headers});
  }
}



