import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebService, WebserviceService } from 'src/app/restApi/webservice.service';

@Component({
  selector: 'app-parwebservice',
  templateUrl: './parwebservice.component.html',
  styleUrls: ['./parwebservice.component.scss']
})
export class ParwebserviceComponent implements OnInit {

  webservices: WebService[];
  constructor(private webServiceService: WebserviceService) { }

  ngOnInit(): void {
    this.getWebServices();
  }

  getWebServices(){
    this.webServiceService.getAllWebServices().subscribe(
      (response: WebService[]) => {
        this.webservices=response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
    }
    
}
