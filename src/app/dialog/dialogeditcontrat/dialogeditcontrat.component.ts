import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contrat, ContratService } from 'src/app/services/contrat.service';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/services/solutionpartenaire.service';

@Component({
  selector: 'app-dialogeditcontrat',
  templateUrl: './dialogeditcontrat.component.html',
  styleUrls: ['./dialogeditcontrat.component.scss']
})
export class DialogeditcontratComponent implements OnInit {

  solutions:SolutionPartenaire[];
  myForm:FormGroup;
  solutionPartenaireUsername:string;

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private formBuilder: FormBuilder,
              private solutionpartenaireService: SolutionPartenaireService,
              private contratService: ContratService) { }

  ngOnInit(): void {
    this.getSolutions();

    this.myForm=this.formBuilder.group({
      id:[this.data.id],
      title:[this.data.title, [Validators.required]],
      dateDebut:[this.data.dateDebut, [Validators.required]],
      dateFin:[this.data.dateFin, [Validators.required]],
      label:[this.data.label],
      solutionPartenaire:[this.data.solutionPartenaire]
    })
    this.solutionPartenaireUsername=this.data.solutionPartenaire.username;
    
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

  public editContrat(): void {
    document.getElementById('closebutton').click();
    this.contratService.updateContrat(this.myForm.value).subscribe(
      (response: Contrat) => {
                
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}
