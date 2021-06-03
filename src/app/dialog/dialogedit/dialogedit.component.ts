import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

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
        this.openSnackBar('Solution partenaire modifié avec succées.');
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
