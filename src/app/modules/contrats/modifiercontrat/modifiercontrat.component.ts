import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogaccesComponent } from 'src/app/dialog/dialogacces/dialogacces.component';
import { DialogsuppComponent } from 'src/app/dialog/dialogsupp/dialogsupp.component';
import { Contrat, ContratService } from 'src/app/restApi/contrat.service';

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
  selector: 'app-modifiercontrat',
  templateUrl: './modifiercontrat.component.html',
  styleUrls: ['./modifiercontrat.component.scss']
})
export class ModifiercontratComponent {

  WS: objet[] = [
    {value: 'Web service 1', viewValue: 'Web service 1'},
    {value: 'Web service 2', viewValue: 'Web service 2'},
    {value: 'Web service 3', viewValue: 'Web service 3'}
  ];

  solution: objet[] = [
    {value: 'Solution partenaire 1', viewValue: 'Solution partenaire 1'},
    {value: 'Solution partenaire 2', viewValue: 'Solution partenaire 2'},
    {value: 'Solution partenaire 3', viewValue: 'Solution partenaire 3'}
  ];

  displayedColumns: string[] = ['position', 'contrat','details'];
  dataSource = ELEMENT_DATA;
  
  public contrats: Contrat[];

  constructor(public dialog:MatDialog, public contratService: ContratService) { }


  ngOnInit(){
    this.getContrats();
   }

  public getContrats(): void{
    this.contratService.getAllContrats().subscribe(
      (response: Contrat[]) => {
        this.contrats=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  openDialogAcces(){
    this.dialog.open(DialogaccesComponent);
  }

  openDialogSupp(){
    this.dialog.open(DialogsuppComponent);
  }

}
