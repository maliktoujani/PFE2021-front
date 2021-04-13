import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';

@Component({
  selector: 'app-dialogajout',
  templateUrl: './dialogajout.component.html',
  styleUrls: ['./dialogajout.component.scss']
})
export class DialogajoutComponent implements OnInit {

  constructor(public solutionpartenaireService: SolutionPartenaireService) { }

  ngOnInit(){}

  public onAddSolutionPartenaire(addForm: NgForm): void {
    document.getElementById('closebutton').click();
    this.solutionpartenaireService.addSolutionPartenaire(addForm.value).subscribe(
      (response: SolutionPartenaire) => {
        
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }
}
