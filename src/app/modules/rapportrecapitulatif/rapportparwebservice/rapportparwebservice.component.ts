import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HistoriqueAppel, HistoriqueappelService } from 'src/app/restApi/historiqueappel.service';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';

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

  public pieChartLabels = ['https://cat-fact.herokuapp.com/facts', 'https://www.boredapi.com/api/activity'];
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

    this.getStatistiquePercentage();
    
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

}
