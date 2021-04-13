import { Component, OnInit } from '@angular/core';


interface PeriodicElement {
  contrat: string;
  position: number;
  details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, contrat: 'Contrat C1', details:'1'},
];

@Component({
  selector: 'app-dialogacces',
  templateUrl: './dialogacces.component.html',
  styleUrls: ['./dialogacces.component.scss']
})
export class DialogaccesComponent implements OnInit {

  days: string[] = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

  displayedColumns: string[] = ['jours', 'heuredeb','heurefin'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
