import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { SolutionpartenaireComponent } from 'src/app/modules/solutionpartenaire/solutionpartenaire.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { DialogajoutComponent } from 'src/app/dialog/dialogajout/dialogajout.component';
import { DialogsuppComponent } from 'src/app/dialog/dialogsupp/dialogsupp.component';
import { AjoutcontratComponent } from 'src/app/modules/contrats/ajoutcontrat/ajoutcontrat.component';
import { ModifiercontratComponent } from 'src/app/modules/contrats/modifiercontrat/modifiercontrat.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from 'src/app/login/login.component';
import { DialogaccesComponent } from 'src/app/dialog/dialogacces/dialogacces.component';
import { MatIconModule } from '@angular/material/icon';
import { WebserviceComponent } from 'src/app/modules/webservice/webservice.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogsettingsComponent } from 'src/app/dialog/dialogsettings/dialogsettings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from '../../modules/test/test.component';
import { DialogeditComponent } from 'src/app/dialog/dialogedit/dialogedit.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogsuppcontratComponent } from 'src/app/dialog/dialogsuppcontrat/dialogsuppcontrat.component';
import { DialogeditcontratComponent } from 'src/app/dialog/dialogeditcontrat/dialogeditcontrat.component';
import { DialogaddinfoaccesComponent } from 'src/app/dialog/dialogaddinfoacces/dialogaddinfoacces.component';
import { DialogsuppinfoaccesComponent } from 'src/app/dialog/dialogsuppinfoacces/dialogsuppinfoacces.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { ParsolutionpartenaireComponent } from 'src/app/modules/appelswebservice/parsolutionpartenaire/parsolutionpartenaire.component';
import { ParwebserviceComponent } from 'src/app/modules/appelswebservice/parwebservice/parwebservice.component';
import { RapportparsolutionpartenaireComponent } from 'src/app/modules/rapportrecapitulatif/rapportparsolutionpartenaire/rapportparsolutionpartenaire.component';
import { RapportparwebserviceComponent } from 'src/app/modules/rapportrecapitulatif/rapportparwebservice/rapportparwebservice.component';
import { ChartsModule } from 'ng2-charts';
import { DialogsuppwebserviceComponent } from 'src/app/dialog/dialogsuppwebservice/dialogsuppwebservice.component';
import { DialogajoutwebserviceComponent } from 'src/app/dialog/dialogajoutwebservice/dialogajoutwebservice.component';
import { DialogeditwebserviceComponent } from 'src/app/dialog/dialogeditwebservice/dialogeditwebservice.component';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    DefaultComponent,
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
    DialogeditComponent,
    DialogsuppcontratComponent,
    DialogeditcontratComponent,
    DialogaddinfoaccesComponent,
    DialogsuppinfoaccesComponent,
    ParsolutionpartenaireComponent,
    ParwebserviceComponent,
    RapportparsolutionpartenaireComponent,
    RapportparwebserviceComponent,
    DialogsuppwebserviceComponent,
    DialogajoutwebserviceComponent,
    DialogeditwebserviceComponent
  ],
  entryComponents: [DialogajoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    ChartsModule,
    MatToolbarModule
  ],
  providers: []
})
export class DefaultModule { }
