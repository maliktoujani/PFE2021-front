import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SolutionPartenaire } from './solutionpartenaire.service';

export interface Contrat {
  id:number;
  title:string;
  dateDebut:Date;
  dateFin:Date;
  label:string;
  solutionPartenaire:SolutionPartenaire;
}

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private apiServerUrl=environment.apiBaseUrl+'/admin/contrat';
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });

  constructor(private http: HttpClient) { }

  public getAllContrats(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`,{'headers': this.headers});
  }

  public addContrat(contrat: Contrat): Observable<Contrat>{
    return this.http.post<Contrat>(`${this.apiServerUrl}/add`,contrat,{'headers': this.headers});
  }

  public updateContrat(contrat: Contrat): Observable<Contrat>{
    return this.http.put<Contrat>(`${this.apiServerUrl}/update`,contrat,{'headers': this.headers});
  }

  public deleteContrat(contratId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${contratId}`,{'headers': this.headers});
  }
}


