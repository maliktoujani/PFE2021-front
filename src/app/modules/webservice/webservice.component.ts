import { Component, OnInit } from '@angular/core';

interface webservice {
  value: string;
  viewValue: string;
}

interface contrat {
  value: string;
  viewValue: string;
}

interface format {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.component.html',
  styleUrls: ['./webservice.component.scss']
})
export class WebserviceComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  webservices: webservice[] = [
    {value: 'Web service 1', viewValue: 'Web service 1'},
    {value: 'Web service 2', viewValue: 'Web service 2'},
    {value: 'Web service 3', viewValue: 'Web service 3'}
  ];

  contrats: contrat[] = [
    {value: 'Contrat 1', viewValue: 'Contrat 1'},
    {value: 'Contrat 2', viewValue: 'Contrat 2'},
    {value: 'Contrat 3', viewValue: 'Contrat 3'}
  ];

  formats: format[] = [
    {value: 'JSON', viewValue: 'JSON'},
    {value: 'XML', viewValue: 'XML'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
