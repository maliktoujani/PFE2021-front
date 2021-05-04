import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrat } from './contrat.service';
import { PeriodeAcces } from './periodeacces.service';
import { WebService } from './webservice.service';

export class InfoAcces {
  id:number;
  commentaire:string;
  contrat:Contrat;
  webService:WebService;
  periodeAcces:PeriodeAcces[];
}

@Injectable({
  providedIn: 'root'
})
export class InfoaccesService {

  private apiServerUrl=environment.apiBaseUrl+'/infoacces';
  constructor(private http: HttpClient) { }

  public getAllInfoAcces(): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/all`,{headers});
  }

  public addInfoAcces(infoacces:InfoAcces): Observable<InfoAcces>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<InfoAcces>(`${this.apiServerUrl}/add`,infoacces,{headers});
  }

  public updateInfoAcces(infoacces:InfoAcces): Observable<InfoAcces>{
    return this.http.put<InfoAcces>(`${this.apiServerUrl}/update`,infoacces);
  }

  public deleteInfoAcces(infoaccesId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${infoaccesId}`);
  }

  public getInfoAccesById(infoaccesId: string): Observable<InfoAcces>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<InfoAcces>(`${this.apiServerUrl}/find/${infoaccesId}`,{headers});
  }

  public addInfoAccesWithContrat(infoacces:InfoAcces, contratId:number): Observable<InfoAcces>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<InfoAcces>(`${this.apiServerUrl}/addinfoacceswithcontrat/${contratId}`,infoacces,{headers});
  }

}
