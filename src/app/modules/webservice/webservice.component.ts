import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogajoutwebserviceComponent } from 'src/app/dialog/dialogajoutwebservice/dialogajoutwebservice.component';
import { DialogeditwebserviceComponent } from 'src/app/dialog/dialogeditwebservice/dialogeditwebservice.component';
import { DialogsuppwebserviceComponent } from 'src/app/dialog/dialogsuppwebservice/dialogsuppwebservice.component';
import { Contrat } from 'src/app/services/contrat.service';
import { WebService, WebserviceService } from 'src/app/services/webservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.component.html',
  styleUrls: ['./webservice.component.scss']
})
export class WebserviceComponent implements OnInit {

  constructor(private webServiceService: WebserviceService, private dialog:MatDialog){}

  displayedColumns= ["url de base", "url de sortie", "format", "methodeHttp", "actions"];
  webServices:WebService[];
  contrats:Contrat[];
  url=environment.apiBaseUrl+'/webservice/';

  ngOnInit(){

    this.getWebServices(); 

  }

  public getWebServices(){
    this.webServiceService.getAllWebServices().subscribe(
      (response: WebService[]) => {
        this.webServices=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  openDialogAjout(){
    this.dialog.open(DialogajoutwebserviceComponent);
  }

  openDialogEdit(element:WebService){
    this.dialog.open(DialogeditwebserviceComponent,{
      data:{
        id:element.id,
        url:element.url,
        format:element.format,
        methodeHttp:element.methodeHttp
      }
    });
  }

  openDialogSupp(id:string){
    this.dialog.open(DialogsuppwebserviceComponent,{
      data:{
        id:id
      }
    });
  }

  public searchWebServices(key:string):void{
    const results:WebService[]=[];
    for(const webService of this.webServices){
      if(webService.url.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
         webService.format.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
         webService.methodeHttp.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(webService);
      }
    }
    this.webServices=results;
    if(!key){
      this.getWebServices();
    }
  }

}

