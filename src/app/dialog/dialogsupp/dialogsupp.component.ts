import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SolutionPartenaireService } from 'src/app/services/solutionpartenaire.service';

@Component({
  selector: 'app-dialogsupp',
  templateUrl: './dialogsupp.component.html',
  styleUrls: ['./dialogsupp.component.scss']
})
export class DialogsuppComponent implements OnInit {

  constructor(private solutionpartenaireService: SolutionPartenaireService, 
              @Inject(MAT_DIALOG_DATA) public data,
              private snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

  public onDeleteSolutionPartenaire(): void {
    document.getElementById('closebutton').click();
    this.solutionpartenaireService.deleteSolutionPartenaire(this.data.id).subscribe(
      (response: void) => {
        this.openSnackBar('Solution partenaire supprimé avec succées.');
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
