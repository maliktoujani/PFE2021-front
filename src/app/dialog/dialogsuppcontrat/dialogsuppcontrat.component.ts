import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-dialogsuppcontrat',
  templateUrl: './dialogsuppcontrat.component.html',
  styleUrls: ['./dialogsuppcontrat.component.scss']
})
export class DialogsuppcontratComponent implements OnInit {

  constructor(private contratService: ContratService, private snackBar:MatSnackBar, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  public onDeleteContrat(): void {
    document.getElementById('closebutton').click();
    this.contratService.deleteContrat(this.data.id).subscribe(
      (response: void) => {
        this.openSnackBar('Contrat supprimé avec succées.');
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
