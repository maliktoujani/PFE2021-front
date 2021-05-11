import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SolutionPartenaire, SolutionPartenaireService } from 'src/app/restApi/solutionpartenaire.service';

@Component({
  selector: 'app-parsolutionpartenaire',
  templateUrl: './parsolutionpartenaire.component.html',
  styleUrls: ['./parsolutionpartenaire.component.scss']
})
export class ParsolutionpartenaireComponent implements OnInit {

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