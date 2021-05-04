import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HistoriqueAppel, HistoriqueappelService } from 'src/app/restApi/historiqueappel.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit{

  chart = [];
  historiqueAppel:HistoriqueAppel[];

  constructor(private historiqueappelService: HistoriqueappelService){}

  ngOnInit(){
    this.getHistoriqueAppel()



    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          { 
            data: temp_max,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: temp_min,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });




  }

  public getHistoriqueAppel(): void {
    this.historiqueappelService.getAllHistoriqueAppel().subscribe(
      (response: HistoriqueAppel[]) => {
          this.historiqueAppel=response;        
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }


  




}