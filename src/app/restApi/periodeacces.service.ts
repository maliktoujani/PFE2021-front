import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface PeriodeAcces {
  id:number;
  jour:string;
  heureDebut:number;
  heureFin:number;
}

@Injectable({
  providedIn: 'root'
})
export class PeriodeaccesService {

  private apiServerUrl=environment.apiBaseUrl+'/admin/periodeacces';
  constructor(private http: HttpClient) { }

  public getAllPeriodeAcces(): Observable<any>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(`${this.apiServerUrl}/all`,{headers});
  }

  public addPeriodeAcces(periodeacces:PeriodeAcces): Observable<PeriodeAcces>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<PeriodeAcces>(`${this.apiServerUrl}/add`,periodeacces,{headers});
  }

  public addlistPeriodeAccesWithInfoAcces(periodeacces:PeriodeAcces[], infoAccesId:number): Observable<PeriodeAcces>{
    let username='admin'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<PeriodeAcces>(`${this.apiServerUrl}/addlistPeriodeAccesWithInfoAcces/${infoAccesId}`,periodeacces,{headers});
  }

  public updatePeriodeAcces(periodeacces:PeriodeAcces): Observable<PeriodeAcces>{
    return this.http.put<PeriodeAcces>(`${this.apiServerUrl}/update`,periodeacces);
  }

  public deletePeriodeAcces(periodeaccesId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${periodeaccesId}`);
  }

}
