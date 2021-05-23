import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/services/solutionpartenaire.service';

@Component({
  selector: 'app-dialogedit',
  templateUrl: './dialogedit.component.html',
  styleUrls: ['./dialogedit.component.scss']
})
export class DialogeditComponent implements OnInit {

  myForm: FormGroup;

  constructor(public solutionpartenaireService: SolutionPartenaireService, 
              @Inject(MAT_DIALOG_DATA) private data,
              private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.myForm=this.formBuilder.group({
      id:[this.data.id],
      username:[this.data.username, [Validators.required]],
      email:[this.data.email, [Validators.required, Validators.email]],
      phone:[this.data.phone],
      password:[this.data.password, [Validators.required]]
    })
  }

  public editSolutionPartenaire(): void {
    document.getElementById('closebutton').click();
    this.solutionpartenaireService.updateSolutionPartenaire(this.myForm.value).subscribe(
      (response: SolutionPartenaire) => {
                
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}
