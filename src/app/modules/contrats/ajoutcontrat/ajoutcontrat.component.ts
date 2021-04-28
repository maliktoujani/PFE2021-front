import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogaccesComponent } from 'src/app/dialog/dialogacces/dialogacces.component';
import { Contrat, ContratService } from 'src/app/restApi/contrat.service';
import { InfoAcces, InfoaccesService } from 'src/app/restApi/infoacces.service';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';

@Component({
  selector: 'app-ajoutcontrat',
  templateUrl: './ajoutcontrat.component.html',
  styleUrls: ['./ajoutcontrat.component.scss']
})
export class AjoutcontratComponent {

  solutions:SolutionPartenaire[];
  webservices:WebService[];
  
  infoAcces=new InfoAcces();

  myForm:FormGroup;

  constructor(private solutionpartenaireService: SolutionPartenaireService, 
              private contratService:ContratService, 
              private webServiceService:WebserviceService, 
              private infoAccesService:InfoaccesService,
              private dialog:MatDialog,
              private formBuilder:FormBuilder,
              private snackBar: MatSnackBar) { }



  ngOnInit(){
    this.getSolutions(); 
    this.getWebServices();

    this.myForm=this.formBuilder.group({
      title:'',
      dateDebut:'',
      dateFin:'',
      solutionPartenaire:'',
      label:'',
      infoAcces: this.formBuilder.array([])
    })
    
    this.onAddInfoAcces();
  }

  get infoAccesForms(){
    return this.myForm.get('infoAcces') as FormArray
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

  public getWebServices(): void {
    this.webServiceService.getAllWebServices().subscribe(
      (response: WebService[]) => {
        this.webservices=response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

  openDialogAcces(){
    this.dialog.open(DialogaccesComponent);
  }

  public onValider(): void {
    this.AddContrat(this.myForm)
    console.log(this.myForm.value); 
  }

  AddContrat(addForm: FormGroup){
    this.contratService.addContrat(addForm.value).subscribe(
      (response: Contrat) => {
        this.openSnackBar('Contrat ajouté avec succées.'); 
      },
      (error: HttpErrorResponse) => {
        this.openSnackBar('Veuillez ajouter un contrat !');        
      }
    );
  }

  addInfoAcces(addForm: NgForm){
    this.infoAccesService.addInfoAcces(addForm.value).subscribe(
      (response: InfoAcces) => {

      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onAddInfoAcces(){
    const infoAcces = this.formBuilder.group({
      commentaire: [],
      webService: [],
      contrat: [],
      periodeAcces: this.formBuilder.array([])
    })
    this.infoAccesForms.push(infoAcces);
  }

  onRemoveInfoAcces(index){
    this.infoAccesForms.removeAt(index)
  }

  openSnackBar(message, action?) {
    let snackbarref = this.snackBar.open(message, action, {duration:2500});
  }

  
}
