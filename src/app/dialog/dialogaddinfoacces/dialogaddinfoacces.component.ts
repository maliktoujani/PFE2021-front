import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoAcces, InfoaccesService } from 'src/app/restApi/infoacces.service';
import { PeriodeAcces, PeriodeaccesService } from 'src/app/restApi/periodeacces.service';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';

export interface day {
  name: string;
  value: string;
}

@Component({
  selector: 'app-dialogaddinfoacces',
  templateUrl: './dialogaddinfoacces.component.html',
  styleUrls: ['./dialogaddinfoacces.component.scss']
})
export class DialogaddinfoaccesComponent implements OnInit {

  days: day[] = [
    {name: 'Lundi', value: 'MONDAY'},
    {name: 'Mardi', value: 'TUESDAY'},
    {name: 'Mercredi', value: 'WEDNESDAY'},
    {name: 'Jeudi', value: 'THURSDAY'},
    {name: 'Vendredi', value: 'FRIDAY'},
    {name: 'Samedi', value: 'SATURDAY'},
    {name: 'Dimanche', value: 'SUNDAY'}
  ]

  newInfoAcces:InfoAcces;

  infoAcces:InfoAcces;
  myForm:FormGroup;
  webservices:WebService[];
  periodeAccesForm:FormGroup;
  infoAccesForm:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private formBuilder: FormBuilder,
              private webServiceService:WebserviceService, 
              private infoAccesService:InfoaccesService,
              private periodeAccesService:PeriodeaccesService,
              private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
        
    this.getWebServices();

    this.infoAccesForm=this.formBuilder.group({
      webService:['', [Validators.required]],
    })

    this.periodeAccesForm=this.formBuilder.group({
      periodeAcces: this.formBuilder.array([])
    })

    this.onAddPeriodeAcces();
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
        this.openSnackBar('Accés ajouté avec succées.'); 
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
          this.openSnackBar('Veuillez ajouter un accés !');
      }
    );
  } 


  public addInfoAccesWithContrat(): void {
    document.getElementById('closebutton').click();
    this.infoAccesService.addInfoAccesWithContrat(this.infoAccesForm.value, this.data.id).subscribe(
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
  
  openSnackBar(message, action?) {
    let snackbarref = this.snackBar.open(message, action, {duration:2500});
  }

  onAjouter(){
    this.addInfoAccesWithContrat();
  }

}
