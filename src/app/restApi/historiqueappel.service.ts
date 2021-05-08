import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SolutionPartenaire } from './solutionpartenaire.service';
import { WebService } from './webservice.service';

export interface HistoriqueAppel {
  id:number;
  resultat:boolean;
  dateHeure:Date;
  details:string;
  webService:WebService;
  solutionPartenaire:SolutionPartenaire;
}

@Injectable({
  providedIn: 'root'
})
export class HistoriqueappelService {

  private apiServerUrl=environment.apiBaseUrl+'/historiqueappel';
  constructor(private http: HttpClient) { }

  public getAllHistoriqueAppel(): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/all`,{headers});
  }

  public getStatistiquePerDay(): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/statistiqueperday`,{headers});
  }

  public getStatistiquePerDayByWebService(webServiceId: number): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/statistiqueperday/${webServiceId}`,{headers});
  }

  public getTodaysAppelWebService(): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/todaysappelwebservice`,{headers});
  }

  public addHistoriqueAppel(historiqueAppel: HistoriqueAppel): Observable<HistoriqueAppel>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<HistoriqueAppel>(`${this.apiServerUrl}/add`,historiqueAppel,{headers});
  }

  public updateHistoriqueAppel(historiqueAppel: HistoriqueAppel): Observable<HistoriqueAppel>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<HistoriqueAppel>(`${this.apiServerUrl}/update`,historiqueAppel,{headers});
  }

  public deleteHistoriqueAppel(historiqueAppelId: number): Observable<void>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${historiqueAppelId}`,{headers});
  }
}
