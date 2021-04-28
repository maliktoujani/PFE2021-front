import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contrat } from './contrat.service';

export interface SolutionPartenaire {
  id:number;
  username:string;
  password:string;
  email:string;
  phone:Number;
  contrats:Contrat[];
}

@Injectable({
  providedIn: 'root'
})
export class SolutionPartenaireService {

  private apiServerUrl=environment.apiBaseUrl+'/solutionpartenaire';

  
  constructor(private http: HttpClient) { }

  public getAllSolutions(): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/all`,{headers});
  }

  public addSolutionPartenaire(solutionpartenaire: SolutionPartenaire): Observable<SolutionPartenaire>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<SolutionPartenaire>(`${this.apiServerUrl}/add`,solutionpartenaire,{headers});
  }

  public updateSolutionPartenaire(solutionpartenaire: SolutionPartenaire): Observable<SolutionPartenaire>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<SolutionPartenaire>(`${this.apiServerUrl}/update`,solutionpartenaire,{headers});
  }

  public deleteSolutionPartenaire(solutionpartenaireId: string): Observable<void>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${solutionpartenaireId}`,{headers});
  }

}