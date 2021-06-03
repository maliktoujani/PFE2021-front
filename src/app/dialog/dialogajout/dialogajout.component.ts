import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/services/solutionpartenaire.service';

@Component({
  selector: 'app-dialogajout',
  templateUrl: './dialogajout.component.html',
  styleUrls: ['./dialogajout.component.scss']
})
export class DialogajoutComponent implements OnInit {

  myForm: FormGroup;
  solutionPartenaires: string[];

  constructor(private solutionpartenaireService: SolutionPartenaireService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.myForm=this.formBuilder.group({
      username:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      phone:[''],
      password:['', [Validators.required]]
    })
  }

  public addSolutionPartenaire(): void {
    document.getElementById('closebutton').click();
    this.solutionpartenaireService.addSolutionPartenaire(this.myForm.value).subscribe(
      (response: SolutionPartenaire) => {
          this.openSnackBar('Solution partenaire ajouté avec succées.');
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