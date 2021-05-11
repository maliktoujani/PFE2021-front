import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArcElement, CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PieController, PointElement, Title} from 'chart.js';
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

  chartLineVar : any;
  chartLineVar1 : any;
  chartLineVar2 : any;
  chartLineVar3 : any;
  chartPieVar : any;

  dataPerDay1:number[];
  dataPerDayTot:number[];
  webServices:WebService[];
  todaysAppels:HistoriqueAppel[];
  dataPerWebService:DataPerWebService[];

  aux:any;

  constructor(private historiqueappelService :HistoriqueappelService, private webServiceService :WebserviceService){}


  ngOnInit(): void{

    this.aux = this.getStatistiquePerDayByWebService(1);

    this.getTodaysAppelWebService();

    this.getWebServices();

    this.getStatistiquePerDayByWebService(2);

    this.getStatistiquePerDay();
    this.affiche();

  }

  public affiche(){
    console.log(this.aux);
  }

  public getWebServices(){
    this.webServiceService.getAllWebServices().subscribe(
      (response: WebService[]) => {
        this.webServices=response;
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
        this.chartLine1(response)
        this.chartLine2(response)
        this.chartLine3(response)
        this.chartPie(response)

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getStatistiquePerDayByWebService(id:number):any{
    this.historiqueappelService.getStatistiquePerDayByWebService(id).subscribe(
      (response: number[]) => {
          return response;
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
    this.chartLineVar = new Chart('canvas', {
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

  public chartLine1(dataPerDay:number[]){

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
      ]
    }

    

    Chart.register(LineController, Title, Legend, LineElement, PointElement, LinearScale, CategoryScale);
    this.chartLineVar = new Chart('chartLine1', {
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

  public chartLine2(dataPerDay:number[]){

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
      ]
    }    

    Chart.register(LineController, Title, Legend, LineElement, PointElement, LinearScale, CategoryScale);
    this.chartLineVar = new Chart('chartLine2', {
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

  public chartLine3(dataPerDay:number[]){

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
      ]
    }

    

    Chart.register(LineController, Title, Legend, LineElement, PointElement, LinearScale, CategoryScale);
    this.chartLineVar = new Chart('chartLine3', {
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

  public chartPie(dataPerDay:number[]){

    let data = {
      labels:['Web service 1', 'Web service 2', 'Web service 3'],
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

    

    Chart.register(PieController, ArcElement);
    this.chartPieVar = new Chart('chartPie', {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Web service de la semaine'
          }
        }
      },
    })
      
  }

}
