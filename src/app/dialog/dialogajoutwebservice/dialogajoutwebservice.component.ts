import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';

interface format {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialogajoutwebservice',
  templateUrl: './dialogajoutwebservice.component.html',
  styleUrls: ['./dialogajoutwebservice.component.scss']
})
export class DialogajoutwebserviceComponent implements OnInit {

  formats: format[] = [
    {value: 'JSON', viewValue: 'JSON'},
    {value: 'XML', viewValue: 'XML'}
  ];

  myForm: FormGroup;

  constructor(private webServiceService: WebserviceService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.myForm=this.formBuilder.group({
      url:['', [Validators.required]],
      format:['', [Validators.required]],
      methodeHttp:['', [Validators.required]]
    })
  }

  public addWebService(): void {
    document.getElementById('closebutton').click();
    this.webServiceService.addWebService(this.myForm.value).subscribe(
      (response: WebService) => {
        this.openSnackBar('Web service ajouté avec succées.');
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
