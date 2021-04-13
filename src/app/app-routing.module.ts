import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { AjoutcontratComponent } from './modules/contrats/ajoutcontrat/ajoutcontrat.component';
import { ModifiercontratComponent } from './modules/contrats/modifiercontrat/modifiercontrat.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SolutionpartenaireComponent } from './modules/solutionpartenaire/solutionpartenaire.component';
import { WebserviceComponent } from './modules/webservice/webservice.component';
import { AuthguardService } from './services/authguard.service';
import { TestComponent } from './modules/test/test.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:DefaultComponent,
    children: [
      {path:'', component: DashboardComponent},
      {path:'solutionpartenaire', component: SolutionpartenaireComponent},
      {path:'ajoutcontrat', component: AjoutcontratComponent},
      {path:'modifiercontrat', component: ModifiercontratComponent},
      {path:'webservice', component: WebserviceComponent},
      {path:'dashboard', component: DashboardComponent},
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
