import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContratService } from 'src/app/restApi/contrat.service';

@Component({
  selector: 'app-dialogsuppcontrat',
  templateUrl: './dialogsuppcontrat.component.html',
  styleUrls: ['./dialogsuppcontrat.component.scss']
})
export class DialogsuppcontratComponent implements OnInit {

  constructor(private contratService: ContratService, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  public onDeleteContrat(): void {
    document.getElementById('closebutton').click();
    this.contratService.deleteContrat(this.data.id).subscribe(
      (response: void) => {
        
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}
