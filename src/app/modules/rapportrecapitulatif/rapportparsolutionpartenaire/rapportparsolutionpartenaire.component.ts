import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HistoriqueAppel, HistoriqueappelService } from 'src/app/services/historiqueappel.service';
import { WebService, WebserviceService } from 'src/app/services/webservice.service';
import { environment } from 'src/environments/environment';
import { DataPerWebService } from '../rapportparwebservice/rapportparwebservice.component';

@Component({
  selector: 'app-rapportparsolutionpartenaire',
  templateUrl: './rapportparsolutionpartenaire.component.html',
  styleUrls: ['./rapportparsolutionpartenaire.component.scss']
})
export class RapportparsolutionpartenaireComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  public barChartLegend = true;
  public barChartData = [];

  public pieChartLabels = ['Vermeg', 'Poulina', 'Talys consulting'];
  public pieChartData = [];

  public doughnutChartLabels = ['Reussite', 'Echec'];
  public doughnutChartData = [];
  
  public radarChartLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  dataPerDay1:number[];
  dataPerDayTot:any;
  webServices:WebService[];
  todaysAppels:HistoriqueAppel[];
  dataPerWebService:DataPerWebService[];
  url=environment.apiBaseUrl+'/webservice/';
  topone:any;

  constructor(private historiqueappelService :HistoriqueappelService, private webServiceService :WebserviceService){}


  ngOnInit(): void{

    this.getStatistiquePerDay();

    this.getStatistiquePercentageBySolutionPartenaire();
    
    this.getTodaysAppelWebService();

    this.getStatistiqueReussiteEchec();

    this.getStatistiqueTop();

  }

  public getTodaysAppelWebService(){
    this.historiqueappelService.getTodaysAppelWebService().subscribe(
      (response: HistoriqueAppel[]) => {
        this.todaysAppels=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getStatistiquePerDay(){
    this.historiqueappelService.getStatistiquePerDayBySolutionPartenaire().subscribe(
      (response: any) => {
        this.barChartData = response;        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getStatistiquePercentageBySolutionPartenaire(){
    this.historiqueappelService.getStatistiquePercentageBySolutionPartenaire().subscribe(
      (response: any) => {
        this.pieChartData = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getStatistiqueReussiteEchec(){
    this.historiqueappelService.getStatistiqueReussiteEchec().subscribe(
      (response: any) => {
        this.doughnutChartData = response;        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getStatistiqueTop(){
    this.historiqueappelService.getStatistiqueTopSolutionPartenaire().subscribe(
      (response: any) => {
        this.topone = response;                
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

}
