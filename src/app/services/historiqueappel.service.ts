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

  private apiServerUrl=environment.apiBaseUrl+'/admin/historiqueappel';
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });

  constructor(private http: HttpClient) { }

  public getAllHistoriqueAppel(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`,{'headers': this.headers});
  }

  public getStatistiquePerDay(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/statistiqueperday`,{'headers': this.headers});
  }

  public getStatistiqueReussiteEchec(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/statistiquereussiteechec`,{'headers': this.headers});
  }

  
  public getStatistiqueTop(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/statistiquetop`,{'headers': this.headers});
  }
  
  public getStatistiqueTopSolutionPartenaire(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/statistiquetopsolutionpartenaire`,{'headers': this.headers});
  }

  public getStatistiquePerDayBySolutionPartenaire(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/statistiqueperdaybysolutionpartenaire`,{'headers': this.headers});
  }

  public getStatistiquePercentage(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/statistiquepercentage`,{'headers': this.headers});
  }

  public getStatistiquePercentageBySolutionPartenaire(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/statistiquepercentagebysolutionpartenaire`,{'headers': this.headers});
  }

  public getStatistiquePerDayByWebService(webServiceId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/statistiqueperday/${webServiceId}`,{'headers': this.headers});
  }

  public getTodaysAppelWebService(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/todaysappelwebservice`,{'headers': this.headers});
  }

  public addHistoriqueAppel(historiqueAppel: HistoriqueAppel): Observable<HistoriqueAppel>{
    return this.http.post<HistoriqueAppel>(`${this.apiServerUrl}/add`,historiqueAppel,{'headers': this.headers});
  }

  public updateHistoriqueAppel(historiqueAppel: HistoriqueAppel): Observable<HistoriqueAppel>{
    return this.http.put<HistoriqueAppel>(`${this.apiServerUrl}/update`,historiqueAppel,{'headers': this.headers});
  }

  public deleteHistoriqueAppel(historiqueAppelId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${historiqueAppelId}`,{'headers': this.headers});
  }
}
