import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './modules/login/login.component';
import { AjoutcontratComponent } from './modules/contrats/ajoutcontrat/ajoutcontrat.component';
import { GestioncontratComponent } from './modules/contrats/gestioncontrat/gestioncontrat.component';
import { SolutionpartenaireComponent } from './modules/solutionpartenaire/solutionpartenaire.component';
import { WebserviceComponent } from './modules/webservice/webservice.component';
import { AuthguardService } from './services/authguard.service';
import { TestComponent } from './modules/test/test.component';
import { ParwebserviceComponent } from './modules/appelswebservice/parwebservice/parwebservice.component';
import { ParsolutionpartenaireComponent } from './modules/appelswebservice/parsolutionpartenaire/parsolutionpartenaire.component';
import { RapportparwebserviceComponent } from './modules/rapportrecapitulatif/rapportparwebservice/rapportparwebservice.component';
import { RapportparsolutionpartenaireComponent } from './modules/rapportrecapitulatif/rapportparsolutionpartenaire/rapportparsolutionpartenaire.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:DefaultComponent,
    children: [
      {path:'', component: RapportparwebserviceComponent},
      {path:'solutionpartenaire', component: SolutionpartenaireComponent},
      {path:'ajoutcontrat', component: AjoutcontratComponent},
      {path:'gestioncontrat', component: GestioncontratComponent},
      {path:'webservice', component: WebserviceComponent},
      {path:'appelswebservice',
        children: [
          {path:'parwebservice', component: ParwebserviceComponent},
          {path:'parsolutionpartenaire', component: ParsolutionpartenaireComponent},
        ],
      },
      {path:'rapportrecapitulatif',
        children: [
          {path:'parwebservice', component: RapportparwebserviceComponent},
          {path:'parsolutionpartenaire', component: RapportparsolutionpartenaireComponent},
        ],
      },
      {path:'test', component: TestComponent}
    ], canActivate:[AuthguardService]
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
