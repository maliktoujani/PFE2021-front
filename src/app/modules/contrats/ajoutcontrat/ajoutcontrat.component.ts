import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contrat, ContratService } from 'src/app/services/contrat.service';
import { InfoAcces, InfoaccesService } from 'src/app/services/infoacces.service';
import { PeriodeAcces, PeriodeaccesService } from 'src/app/services/periodeacces.service';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/services/solutionpartenaire.service';
import { WebService, WebserviceService } from 'src/app/services/webservice.service';
import { environment } from 'src/environments/environment';

export interface day {
  name: string;
  value: string;
}

@Component({
  selector: 'app-ajoutcontrat',
  templateUrl: './ajoutcontrat.component.html',
  styleUrls: ['./ajoutcontrat.component.scss']
})
export class AjoutcontratComponent implements OnInit{

  days: day[] = [
    {name: 'Lundi', value: 'Monday'},
    {name: 'Mardi', value: 'Tuesday'},
    {name: 'Mercredi', value: 'Wednesday'},
    {name: 'Jeudi', value: 'Thursday'},
    {name: 'Vendredi', value: 'Friday'},
    {name: 'Samedi', value: 'Saturday'},
    {name: 'Dimanche', value: 'Sunday'}
  ]

  solutions:SolutionPartenaire[];
  webservices:WebService[];
  
  newContrat:Contrat;
  newInfoAcces:InfoAcces;

  url=environment.apiBaseUrl+'/webservice/';

  periodeAccesForm:FormGroup;
  contratForm:FormGroup;
  infoAccesForm:FormGroup;

  constructor(private solutionpartenaireService: SolutionPartenaireService, 
              private contratService:ContratService, 
              private webServiceService:WebserviceService, 
              private infoAccesService:InfoaccesService,
              private periodeAccesService:PeriodeaccesService,
              private formBuilder:FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.getSolutions(); 
    this.getWebServices();

    this.contratForm=this.formBuilder.group({
      title:['', [Validators.required]],
      dateDebut:['', [Validators.required]],
      dateFin:['', [Validators.required]],
      solutionPartenaire:['', [Validators.required]],
      label:['']
    })
    
    this.infoAccesForm=this.formBuilder.group({
      webService:['', [Validators.required]],
    })

    this.periodeAccesForm=this.formBuilder.group({
      periodeAcces: this.formBuilder.array([])
    })

    this.onAddPeriodeAcces();

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

  addContrat(){
    this.contratService.addContrat(this.contratForm.value).subscribe(
      (response: Contrat) => {
        this.newContrat=response;
        this.openSnackBar('Contrat ajouté avec succées.'); 
      },
      (error: HttpErrorResponse) => {
        this.openSnackBar('Veuillez ajouter un contrat !');
      }
    );
  }

  get periodeAccesForms(){
    return this.periodeAccesForm.get('periodeAcces') as FormArray
  }

  onAddPeriodeAcces(){
    const periodeAcces = this.formBuilder.group({
      jour: ['', [Validators.required]],
      heureDebut: ['', [Validators.required, Validators.max(23), Validators.min(0)]],
      heureFin: ['', [Validators.required, Validators.max(23), Validators.min(0)]]
    })
    this.periodeAccesForms.push(periodeAcces);
  }

  onRemovePeriodeAcces(index){
    this.periodeAccesForms.removeAt(index)
  }

  public addListPeriodeAccesWithInfoAcces(): void {
    this.periodeAccesService.addlistPeriodeAccesWithInfoAcces(this.periodeAccesForm.controls['periodeAcces'].value, this.newInfoAcces.id).subscribe(
      (response: PeriodeAcces) => {
        this.infoAccesForm.reset();
        this.periodeAccesForms.reset();

        this.openSnackBar('Accés ajouté avec succées.'); 
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
          this.openSnackBar('Veuillez ajouter un accés !');
      }
    );
  } 


  public addInfoAccesWithContrat(): void {
    this.infoAccesService.addInfoAccesWithContrat(this.infoAccesForm.value, this.newContrat.id).subscribe(
      (response: InfoAcces) => {
        this.newInfoAcces=response;         
        this.addListPeriodeAccesWithInfoAcces();       
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
          this.openSnackBar('Veuillez ajouter un accés !');
      }
    );
  }

  imprimerContrat(): void {
    this.contratService.imprimerContrat(this.newContrat.id).subscribe(
      (response: any) => {
        document.getElementById('openContrat').click();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  public findContrat(): void {
    this.contratService.getContratById(this.newContrat.id).subscribe(
      (response: Contrat) => {
        this.newContrat=response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }
  
  openSnackBar(message, action?) {
    let snackbarref = this.snackBar.open(message, action, {duration:2500});
  }

}