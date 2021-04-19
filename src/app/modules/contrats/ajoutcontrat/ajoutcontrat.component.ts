import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogaccesComponent } from 'src/app/dialog/dialogacces/dialogacces.component';
import { Contrat, ContratService } from 'src/app/restApi/contrat.service';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';


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

  solutions:SolutionPartenaire[];

  WS: objet[] = [
    {value: 'Web service 1', viewValue: 'Web service 1'},
    {value: 'Web service 2', viewValue: 'Web service 2'},
    {value: 'Web service 3', viewValue: 'Web service 3'}
  ];

  typesOfSolutionPartenaire: string[] = ['Solution Partenaire 1', 'Solution Partenaire 2', 'Solution Partenaire 3'];

  displayedColumns: string[] = ['position', 'contrat','details'];
  dataSource = ELEMENT_DATA;


  constructor(private solutionpartenaireService: SolutionPartenaireService, private contratService:ContratService , public dialog:MatDialog) { }



  ngOnInit(){
    this.getSolutions(); 
  }

  public getSolutions(){
    this.solutionpartenaireService.getAllSolutions().subscribe(
      (response: SolutionPartenaire[]) => {
        this.solutions=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  openDialogAcces(){
    this.dialog.open(DialogaccesComponent);
  }

  public onAddContrat(addForm: NgForm): void {
    this.contratService.addContrat(addForm.value).subscribe(
      (response: Contrat) => {
        console.log(addForm.value);
        
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }


}
