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
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });

  constructor(private http: HttpClient) { }

  public getAllPeriodeAcces(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`,{'headers': this.headers});
  }

  public addPeriodeAcces(periodeacces:PeriodeAcces): Observable<PeriodeAcces>{
    return this.http.post<PeriodeAcces>(`${this.apiServerUrl}/add`,periodeacces,{'headers': this.headers});
  }

  public addlistPeriodeAccesWithInfoAcces(periodeacces:PeriodeAcces[], infoAccesId:number): Observable<PeriodeAcces>{
    return this.http.post<PeriodeAcces>(`${this.apiServerUrl}/addlistPeriodeAccesWithInfoAcces/${infoAccesId}`,periodeacces,{'headers': this.headers});
  }

  public updatePeriodeAcces(periodeacces:PeriodeAcces): Observable<PeriodeAcces>{
    return this.http.put<PeriodeAcces>(`${this.apiServerUrl}/update`,periodeacces,{'headers': this.headers});
  }

  public deletePeriodeAcces(periodeaccesId: string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${periodeaccesId}`,{'headers': this.headers});
  }

}
