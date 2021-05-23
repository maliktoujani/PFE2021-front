import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoaccesService } from 'src/app/services/infoacces.service';

@Component({
  selector: 'app-dialogsuppinfoacces',
  templateUrl: './dialogsuppinfoacces.component.html',
  styleUrls: ['./dialogsuppinfoacces.component.scss']
})
export class DialogsuppinfoaccesComponent implements OnInit {
  
  constructor(private infoAccesService: InfoaccesService, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  public onDeleteInfoAcces(): void {
    document.getElementById('closebutton').click();
    this.infoAccesService.deleteInfoAcces(this.data.id).subscribe(
      (response: void) => {
        
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }
}
