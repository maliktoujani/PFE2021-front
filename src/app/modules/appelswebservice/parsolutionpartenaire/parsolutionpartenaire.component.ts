import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-parsolutionpartenaire',
  templateUrl: './parsolutionpartenaire.component.html',
  styleUrls: ['./parsolutionpartenaire.component.scss']
})
export class ParsolutionpartenaireComponent implements OnInit {

  url=environment.apiBaseUrl+'/webservice/';
  solutionpartenaires: SolutionPartenaire[];
  
  constructor(private solutionPartenaireService: SolutionPartenaireService) { }

  ngOnInit(): void {
    this.getWebServices();
  }

  getWebServices(){
    this.solutionPartenaireService.getAllSolutions().subscribe(
      (response: SolutionPartenaire[]) => {
        this.solutionpartenaires=response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }
}