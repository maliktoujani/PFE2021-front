import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogajoutComponent } from 'src/app/dialog/dialogajout/dialogajout.component';
import { DialogeditComponent } from 'src/app/dialog/dialogedit/dialogedit.component';
import { DialogsuppComponent } from 'src/app/dialog/dialogsupp/dialogsupp.component';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';

@Component({
  selector: 'app-solutionpartenaire',
  templateUrl: './solutionpartenaire.component.html',
  styleUrls: ['./solutionpartenaire.component.scss']
})
export class SolutionpartenaireComponent implements OnInit{

  constructor(private solutionpartenaireService?: SolutionPartenaireService, private dialog?:MatDialog){}

  displayedColumns= ["id", "email", "password", "phone", "actions"];
  solutions:SolutionPartenaire[];

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

  openDialogAjout(){
    this.dialog.open(DialogajoutComponent);
  }

  openDialogEdit(element:SolutionPartenaire){
    this.dialog.open(DialogeditComponent,{
      data:{
        id:element.id,
        email:element.email,
        phone:element.phone,
        password:element.password
      }
    });
  }

  openDialogSupp(id:string){
    console.log(id);
    this.dialog.open(DialogsuppComponent,{
      data:{
        id:id
      }
    });
  }

  public searchSolutions(key:string):void{
    const results:SolutionPartenaire[]=[];
    for(const solution of this.solutions){
      if(solution.email.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(solution);
      }
    }
    this.solutions=results;
    if(results.length === 0 || !key){
      this.getSolutions();
    }
  }

}

