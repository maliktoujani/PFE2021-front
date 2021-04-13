import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';

@Component({
  selector: 'app-dialogedit',
  templateUrl: './dialogedit.component.html',
  styleUrls: ['./dialogedit.component.scss']
})
export class DialogeditComponent implements OnInit {

  constructor(public solutionpartenaireService: SolutionPartenaireService, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(){}

  public onEditSolutionPartenaire(addForm: NgForm): void {
    document.getElementById('closebutton').click();
    this.solutionpartenaireService.updateSolutionPartenaire(addForm.value).subscribe(
      (response: SolutionPartenaire) => {
        
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}
