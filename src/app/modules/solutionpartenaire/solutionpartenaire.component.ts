import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogajoutComponent } from 'src/app/dialog/dialogajout/dialogajout.component';
import { DialogsuppComponent } from 'src/app/dialog/dialogsupp/dialogsupp.component';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';

export interface PeriodicElement {
  contrat: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, contrat: 'Contrat C1'},
  {position: 2, contrat: 'Contrat C2'},
  {position: 3, contrat: 'Contrat C3'},

];



@Component({
  selector: 'app-solutionpartenaire',
  templateUrl: './solutionpartenaire.component.html',
  styleUrls: ['./solutionpartenaire.component.scss']
})
export class SolutionpartenaireComponent implements OnInit{

  typesOfSolutionPartenaire: string[] = ['Solution Partenaire 1', 'Solution Partenaire 2', 'Solution Partenaire 3'];

  displayedColumns: string[] = ['position', 'contrat'];
  dataSource = ELEMENT_DATA;

  public solutions: SolutionPartenaire[];
  
  constructor(public dialog:MatDialog, public solutionpartenaireService: SolutionPartenaireService) { }

  ngOnInit(){
    this.getSolutions();
   }

  public getSolutions(): void{
    this.solutionpartenaireService.getAllSolutions().subscribe(
      (response: SolutionPartenaire[]) => {
        this.solutions=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }


  openDialogAjout(){
    this.dialog.open(DialogajoutComponent);
  }

  openDialogSupp(){
    this.dialog.open(DialogsuppComponent);
  }

}
