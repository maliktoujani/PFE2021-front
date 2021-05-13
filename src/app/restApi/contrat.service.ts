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

  private apiServerUrl=environment.apiBaseUrl+'/contrat';
  constructor(private http: HttpClient) { }

  public getAllContrats(): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/all`,{headers});
  }

  public addContrat(contrat: Contrat): Observable<Contrat>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Contrat>(`${this.apiServerUrl}/add`,contrat,{headers});
  }

  public updateContrat(contrat: Contrat): Observable<Contrat>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<Contrat>(`${this.apiServerUrl}/update`,contrat,{headers});
  }

  public deleteContrat(contratId: string): Observable<void>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${contratId}`,{headers});
  }
}


