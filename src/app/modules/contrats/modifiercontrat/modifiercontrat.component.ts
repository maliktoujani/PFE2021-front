import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Contrat, ContratService } from 'src/app/restApi/contrat.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogeditcontratComponent } from 'src/app/dialog/dialogeditcontrat/dialogeditcontrat.component';
import { DialogsuppcontratComponent } from 'src/app/dialog/dialogsuppcontrat/dialogsuppcontrat.component';
import { DialogaddinfoaccesComponent } from 'src/app/dialog/dialogaddinfoacces/dialogaddinfoacces.component';
import { DialogsuppinfoaccesComponent } from 'src/app/dialog/dialogsuppinfoacces/dialogsuppinfoacces.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modifiercontrat',
  templateUrl: './modifiercontrat.component.html',
  styleUrls: ['./modifiercontrat.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ModifiercontratComponent implements OnInit {

  isTableExpanded = false;
  displayedColumns= ["title", "dateDebut", "dateFin", "solutionPartenaire", "label", "details", "actions"];
  contrats:Contrat[];
  url=environment.apiBaseUrl+'/webservice/';

  constructor(private contratService: ContratService, private dialog?:MatDialog){}

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

  openDialogSupp(id:number){
    this.dialog.open(DialogsuppcontratComponent,{
      data:{
        id:id
      }
    });
  }

  openDialogSuppInfoAcces(id:number){
    this.dialog.open(DialogsuppinfoaccesComponent,{
      data:{
        id:id
      }
    });
  }

  onDialogAddInfoAcces(id:number){
    this.dialog.open(DialogaddinfoaccesComponent,{
      data:{
        id:id
      }
    });
  }

  public searchContrats(key:string):void{
    const results:Contrat[]=[];
    for(const contrat of this.contrats){
      if(contrat.title.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
         contrat.label.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
         contrat.solutionPartenaire.username.toLowerCase().indexOf(key.toLowerCase()) !== -1){
         results.push(contrat);
      }
    }
    this.contrats=results;
    if(!key){
      this.getContrats();
    }
  }

  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;
    this.contrats.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }

}