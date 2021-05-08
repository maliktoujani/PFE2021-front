import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Title} from 'chart.js';
import { HistoriqueAppel, HistoriqueappelService } from 'src/app/restApi/historiqueappel.service';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';

export interface DataPerWebService{
  webService:WebService;
  data:number[];
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit{

  chart : any;

  dataPerDay1:number[];
  dataPerDayTot:number[];
  webServices:WebService[];
  todaysAppels:HistoriqueAppel[];
  dataPerWebService:DataPerWebService[];

  constructor(private historiqueappelService :HistoriqueappelService, private webServiceService :WebserviceService){}


  ngOnInit(): void{

    this.getTodaysAppelWebService();

    this.getWebServices();

    this.getStatistiquePerDayByWebService(2);

    this.getStatistiquePerDay();


  }

  public affiche(){
    this.webServices.forEach(function(value){
      this.dataPerWebService.webService.push(value);
      value.historiqueAppels.forEach(function(value2){
        console.log(value2.dateHeure);
      })
      
    });
  }

  public getWebServices(){
    this.webServiceService.getAllWebServices().subscribe(
      (response: WebService[]) => {
        this.webServices=response;
        this.affiche();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
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
      (response: number[]) => {
        this.chartLine(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getStatistiquePerDayByWebService(id:number){
    this.historiqueappelService.getStatistiquePerDayByWebService(id).subscribe(
      (response: number[]) => {
          this.dataPerDay1 = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public chartLine(dataPerDay:number[]){

    let data = {
      labels:['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets:[
        {
          label:'Tout les web services',
          data:dataPerDay,
          backgroundColor:'#de6484', //ffbb33 yellow
          borderColor:'#de6484',
          fill:false,
        },
        {
          label:'Web service 2',
          data:this.dataPerDay1,
          backgroundColor:'#649fe4',
          borderColor:'#649fe4',
          fill:false,
        },
      ]
    }

    

    Chart.register(LineController, Title, Legend, LineElement, PointElement, LinearScale, CategoryScale);
    this.chart = new Chart('canvas', {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Appel service de la semaine'
          }
        }
      },
    })
      
  }

}