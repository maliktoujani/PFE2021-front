import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contrat } from './contrat.service';
import { HistoriqueAppel } from './historiqueappel.service';

export interface SolutionPartenaire {
  id:number;
  username:string;
  password:string;
  email:string;
  phone:Number;
  contrats:Contrat[];
  historiqueAppels:HistoriqueAppel[];
}

@Injectable({
  providedIn: 'root'
})
export class SolutionPartenaireService {

  private apiServerUrl=environment.apiBaseUrl+'/admin/solutionpartenaire';
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
  
  constructor(private http: HttpClient) { }

  public getAllSolutions(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`,{'headers': this.headers});
  }

  public addSolutionPartenaire(solutionpartenaire: SolutionPartenaire): Observable<SolutionPartenaire>{
    return this.http.post<SolutionPartenaire>(`${this.apiServerUrl}/add`,solutionpartenaire,{'headers': this.headers});
  }

  public updateSolutionPartenaire(solutionpartenaire: SolutionPartenaire): Observable<SolutionPartenaire>{
    return this.http.put<SolutionPartenaire>(`${this.apiServerUrl}/update`,solutionpartenaire,{'headers': this.headers});
  }

  public deleteSolutionPartenaire(solutionpartenaireId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${solutionpartenaireId}`,{'headers': this.headers});
  }

}