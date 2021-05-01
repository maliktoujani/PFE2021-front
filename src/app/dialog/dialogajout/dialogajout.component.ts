import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';

@Component({
  selector: 'app-dialogajout',
  templateUrl: './dialogajout.component.html',
  styleUrls: ['./dialogajout.component.scss']
})
export class DialogajoutComponent implements OnInit {

  myForm: FormGroup;

  constructor(private solutionpartenaireService: SolutionPartenaireService,
              private formBuilder: FormBuilder) { }

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
        
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}
