import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HistoriqueAppel, HistoriqueappelService } from 'src/app/restApi/historiqueappel.service';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';
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

  public pieChartLabels = ['malek toujani', 'test'];
  public pieChartData = [];

  public doughnutChartLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  public radarChartLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  dataPerDay1:number[];
  dataPerDayTot:any;
  webServices:WebService[];
  todaysAppels:HistoriqueAppel[];
  dataPerWebService:DataPerWebService[];

  aux:any;

  constructor(private historiqueappelService :HistoriqueappelService, private webServiceService :WebserviceService){}


  ngOnInit(): void{

    this.getStatistiquePerDay();

    this.getStatistiquePercentageBySolutionPartenaire();
    
    this.getTodaysAppelWebService();

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

}
