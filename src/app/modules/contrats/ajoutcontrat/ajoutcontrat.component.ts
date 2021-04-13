import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogaccesComponent } from 'src/app/dialog/dialogacces/dialogacces.component';


interface objet {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  contrat: string;
  position: number;
  details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, contrat: 'Contrat C1', details:'1'},
];

@Component({
  selector: 'app-ajoutcontrat',
  templateUrl: './ajoutcontrat.component.html',
  styleUrls: ['./ajoutcontrat.component.scss']
})
export class AjoutcontratComponent {

  SP: objet[] = [
    {value: 'Solution partenaire 1', viewValue: 'Solution partenaire 1'},
    {value: 'Solution partenaire 2', viewValue: 'Solution partenaire 2'},
    {value: 'Solution partenaire 3', viewValue: 'Solution partenaire 3'}
  ];

  WS: objet[] = [
    {value: 'Web service 1', viewValue: 'Web service 1'},
    {value: 'Web service 2', viewValue: 'Web service 2'},
    {value: 'Web service 3', viewValue: 'Web service 3'}
  ];

  typesOfSolutionPartenaire: string[] = ['Solution Partenaire 1', 'Solution Partenaire 2', 'Solution Partenaire 3'];

  displayedColumns: string[] = ['position', 'contrat','details'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog:MatDialog) { }

  openDialogAcces(){
    this.dialog.open(DialogaccesComponent);
  }

}
