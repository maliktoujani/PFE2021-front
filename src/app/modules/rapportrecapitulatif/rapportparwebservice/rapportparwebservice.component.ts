import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HistoriqueAppel, HistoriqueappelService } from 'src/app/restApi/historiqueappel.service';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';
import { environment } from 'src/environments/environment';

export interface DataPerWebService{
  webService:WebService;
  data:number[];
}

@Component({
  selector: 'app-rapportparwebservice',
  templateUrl: './rapportparwebservice.component.html',
  styleUrls: ['./rapportparwebservice.component.scss']
})
export class RapportparwebserviceComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  public barChartLegend = true;
  public barChartData = [];

  public pieChartLabels = ['https://cat-fact.herokuapp.com/facts', 'https://www.boredapi.com/api/activity', 'https://api.publicapis.org/entries'];
  public pieChartData = [];

  public doughnutChartLabels = ['Reussite', 'Echec'];
  public doughnutChartData = [];

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

    this.getStatistiquePercentage();
    
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
    this.historiqueappelService.getStatistiquePerDay().subscribe(
      (response: any) => {
        this.barChartData = response;        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getStatistiquePercentage(){
    this.historiqueappelService.getStatistiquePercentage().subscribe(
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
    this.historiqueappelService.getStatistiqueTop().subscribe(
      (response: any) => {
        this.topone = response;                
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

}
