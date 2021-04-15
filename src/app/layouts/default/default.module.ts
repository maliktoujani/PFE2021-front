import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { SolutionpartenaireComponent } from 'src/app/modules/solutionpartenaire/solutionpartenaire.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { DialogajoutComponent } from 'src/app/dialog/dialogajout/dialogajout.component';
import { DialogsuppComponent } from 'src/app/dialog/dialogsupp/dialogsupp.component';
import { AjoutcontratComponent } from 'src/app/modules/contrats/ajoutcontrat/ajoutcontrat.component';
import { ModifiercontratComponent } from 'src/app/modules/contrats/modifiercontrat/modifiercontrat.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from 'src/app/login/login.component';
import { DialogaccesComponent } from 'src/app/dialog/dialogacces/dialogacces.component';
import {MatIconModule} from '@angular/material/icon';
import { WebserviceComponent } from 'src/app/modules/webservice/webservice.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogsettingsComponent } from 'src/app/dialog/dialogsettings/dialogsettings.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TestComponent} from '../../modules/test/test.component';
import { DialogeditComponent } from 'src/app/dialog/dialogedit/dialogedit.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    SolutionpartenaireComponent,
    DialogajoutComponent,
    DialogsuppComponent,
    AjoutcontratComponent,
    ModifiercontratComponent,
    LoginComponent,
    DialogaccesComponent,
    WebserviceComponent,
    DialogsettingsComponent,
    TestComponent,
    DialogeditComponent
  ],
  entryComponents: [DialogajoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
