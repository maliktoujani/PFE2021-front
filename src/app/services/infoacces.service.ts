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

  private apiServerUrl=environment.apiBaseUrl+'/admin/infoacces';
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });

  constructor(private http: HttpClient) { }

  public getAllInfoAcces(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`,{'headers': this.headers});
  }

  public addInfoAcces(infoacces:InfoAcces): Observable<InfoAcces>{
    return this.http.post<InfoAcces>(`${this.apiServerUrl}/add`,infoacces,{'headers': this.headers});
  }

  public updateInfoAcces(infoacces:InfoAcces): Observable<InfoAcces>{
    return this.http.put<InfoAcces>(`${this.apiServerUrl}/update`,infoacces,{'headers': this.headers});
  }

  public deleteInfoAcces(infoaccesId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${infoaccesId}`,{'headers': this.headers});
  }

  public getInfoAccesById(infoaccesId: string): Observable<InfoAcces>{
    return this.http.get<InfoAcces>(`${this.apiServerUrl}/find/${infoaccesId}`,{'headers': this.headers});
  }

  public addInfoAccesWithContrat(infoacces:InfoAcces, contratId:number): Observable<InfoAcces>{
    return this.http.post<InfoAcces>(`${this.apiServerUrl}/addinfoacceswithcontrat/${contratId}`,infoacces,{'headers': this.headers});
  }

}
