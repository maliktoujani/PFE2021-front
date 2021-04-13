import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';

@Component({
  selector: 'app-dialogsupp',
  templateUrl: './dialogsupp.component.html',
  styleUrls: ['./dialogsupp.component.scss']
})
export class DialogsuppComponent implements OnInit {

  constructor(private solutionpartenaireService: SolutionPartenaireService, @Inject(MAT_DIALOG_DATA) public data) { }


  ngOnInit(): void {
  }

  public onDeleteSolutionPartenaire(): void {
    document.getElementById('closebutton').click();
    this.solutionpartenaireService.deleteSolutionPartenaire(this.data.id).subscribe(
      (response: void) => {
        console.log("deleted");
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}
