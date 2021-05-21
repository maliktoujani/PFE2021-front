import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dialogeditwebservice',
  templateUrl: './dialogeditwebservice.component.html',
  styleUrls: ['./dialogeditwebservice.component.scss']
})
export class DialogeditwebserviceComponent implements OnInit {

  methodeHttps: string[] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLINK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND', 'VIEW'];

  formats: string[] = ['JSON', 'XML'];

  myForm: FormGroup;
  urlsortie:string;

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private webServiceService: WebserviceService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit(){
    
    this.urlsortie==environment.apiBaseUrl+'/webservice/';

    this.myForm=this.formBuilder.group({
      id:[this.data.id],
      url:[this.data.url, [Validators.required]],
      format:[this.data.format, [Validators.required]],
      methodeHttp:[this.data.methodeHttp, [Validators.required]]
    })
  }

  public editWebService(): void {
    document.getElementById('closebutton').click();
    this.webServiceService.updateWebService(this.myForm.value).subscribe(
      (response: WebService) => {
        this.openSnackBar('Web service modifié avec succées.');
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
