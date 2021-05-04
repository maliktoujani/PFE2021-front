import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoAcces, InfoaccesService } from 'src/app/restApi/infoacces.service';
import { PeriodeaccesService } from 'src/app/restApi/periodeacces.service';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';

export interface day {
  name: string;
  value: string;
}

@Component({
  selector: 'app-dialogeditinfoacces',
  templateUrl: './dialogeditinfoacces.component.html',
  styleUrls: ['./dialogeditinfoacces.component.scss']
})
export class DialogeditinfoaccesComponent implements OnInit {

  days: day[] = [
    {name: 'Lundi', value: 'MONDAY'},
    {name: 'Mardi', value: 'TUESDAY'},
    {name: 'Mercredi', value: 'WEDNESDAY'},
    {name: 'Jeudi', value: 'THURSDAY'},
    {name: 'Vendredi', value: 'FRIDAY'},
    {name: 'Samedi', value: 'SATURDAY'},
    {name: 'Dimanche', value: 'SUNDAY'}
  ]

  infoAcces:InfoAcces;
  myForm:FormGroup;
  solutionPartenaireUsername:string;
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

    this.getInfoAccesById();
    this.getWebServices();

    this.infoAccesForm=this.formBuilder.group({
      webService:['', [Validators.required]],
    })

    this.periodeAccesForm=this.formBuilder.group({
      periodeAcces: this.formBuilder.array([])
    })

    this.onAddPeriodeAcces();

  }

  get periodeAccesForms(){
    return this.periodeAccesForm.get('periodeAcces') as FormArray
  }

  public getInfoAccesById(){
    this.infoAccesService.getInfoAccesById(this.data.id).subscribe(
      (response: InfoAcces) => {
        this.infoAcces=response;
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

  onAjouter(){
  }

}  