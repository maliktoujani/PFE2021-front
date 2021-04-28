import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { PeriodeAcces, PeriodeaccesService } from 'src/app/restApi/periodeacces.service';


@Component({
  selector: 'app-dialogacces',
  templateUrl: './dialogacces.component.html',
  styleUrls: ['./dialogacces.component.scss']
})
export class DialogaccesComponent implements OnInit {

  days: string[] = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

  myForm:FormGroup;

  constructor(private periodeaccesService:PeriodeaccesService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.formBuilder.group({
      periodeAcces: this.formBuilder.array([])
    })
    this.onAddPeriodeAcces();
  }

  get periodeAccesForms(){
    return this.myForm.get('periodeAcces') as FormArray
  }

  public onValider(myform: FormGroup): void {
    console.log(this.myForm.value);
  }

  onAddPeriodeAcces(){
    const periodeAcces = this.formBuilder.group({
      jour: [],
      heureDebut: [],
      heureFin: []
    })
    this.periodeAccesForms.push(periodeAcces);
  }

  onRemovePeriodeAcces(index){
    this.periodeAccesForms.removeAt(index)
  }


  onAddAcces(addForm:NgForm): void{
    document.getElementById('closebutton').click();
    this.periodeaccesService.addPeriodeAcces(addForm.value).subscribe(
      (response: PeriodeAcces) => {
             
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}
