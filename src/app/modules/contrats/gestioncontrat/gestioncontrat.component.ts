import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Contrat, ContratService } from 'src/app/services/contrat.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogeditcontratComponent } from 'src/app/dialog/dialogeditcontrat/dialogeditcontrat.component';
import { DialogsuppcontratComponent } from 'src/app/dialog/dialogsuppcontrat/dialogsuppcontrat.component';
import { DialogaddinfoaccesComponent } from 'src/app/dialog/dialogaddinfoacces/dialogaddinfoacces.component';
import { DialogsuppinfoaccesComponent } from 'src/app/dialog/dialogsuppinfoacces/dialogsuppinfoacces.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gestioncontrat',
  templateUrl: './gestioncontrat.component.html',
  styleUrls: ['./gestioncontrat.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GestioncontratComponent implements OnInit {

  isTableExpanded = false;
  displayedColumns= ["title", "dateDebut", "dateFin", "solutionPartenaire", "label", "details", "actions"];
  contrats:Contrat[];
  url=environment.apiBaseUrl+'/webservice/';
  printContrat: Contrat;

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

  imprimerContrat(id: number): void {
    this.findContrat(id);
    this.contratService.imprimerContrat(id).subscribe(
      (response: any) => {
        document.getElementById('openContrat').click();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public findContrat(id: number): void {
    this.contratService.getContratById(id).subscribe(
      (response: Contrat) => {
        this.printContrat=response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
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