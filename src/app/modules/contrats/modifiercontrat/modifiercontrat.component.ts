import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogeditcontratComponent } from 'src/app/dialog/dialogeditcontrat/dialogeditcontrat.component';
import { DialogsuppcontratComponent } from 'src/app/dialog/dialogsuppcontrat/dialogsuppcontrat.component';
import { Contrat, ContratService } from 'src/app/restApi/contrat.service';

@Component({
  selector: 'app-modifiercontrat',
  templateUrl: './modifiercontrat.component.html',
  styleUrls: ['./modifiercontrat.component.scss']
})
export class ModifiercontratComponent implements OnInit {

  constructor(private contratService: ContratService, private dialog?:MatDialog){}

  displayedColumns= ["title", "dateDebut", "dateFin", "solutionPartenaire", "label", "actions"];
  contrats:Contrat[];

  ngOnInit(){
    this.getContrats(); 
  }

  public getContrats(){
    this.contratService.getAllContrats().subscribe(
      (response: Contrat[]) => {
        this.contrats=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  openDialogEdit(element:Contrat){
    this.dialog.open(DialogeditcontratComponent,{
      data:{
        id:element.id,
        title:element.title,
        dateDebut:element.dateDebut,
        dateFin:element.dateFin,
        label:element.label,
        solutionPartenaire:element.solutionPartenaire
      }
    });
  }

  openDialogSupp(id:string){
    this.dialog.open(DialogsuppcontratComponent,{
      data:{
        id:id
      }
    });
  }

  public searchContrats(key:string):void{
    const results:Contrat[]=[];
    for(const contrat of this.contrats){
      if(contrat.title.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
         contrat.label.toLowerCase().indexOf(key.toLowerCase()) !== -1){
         results.push(contrat);
      }
    }
    this.contrats=results;
    if(results.length === 0 || !key){
      this.getContrats();
    }
  }
}
