import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebserviceService } from 'src/app/restApi/webservice.service';

@Component({
  selector: 'app-dialogsuppwebservice',
  templateUrl: './dialogsuppwebservice.component.html',
  styleUrls: ['./dialogsuppwebservice.component.scss']
})
export class DialogsuppwebserviceComponent implements OnInit {

  constructor(private webServiceService: WebserviceService, @Inject(MAT_DIALOG_DATA) public data) { }


  ngOnInit(): void {
  }

  public onDeleteWebService(): void {
    document.getElementById('closebutton').click();
    this.webServiceService.deleteWebService(this.data.id).subscribe(
      (response: void) => {
        
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}

