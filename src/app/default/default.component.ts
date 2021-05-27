import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DialogsettingsComponent } from 'src/app/dialog/dialogsettings/dialogsettings.component';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  loggedUsername: string;
  loggedEmail: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private dialog:MatDialog, 
              private logoutservice: AuthentificationService,
              private authentification: AuthentificationService) {}

  ngOnInit(){ 
    this.getLoggedUser();
  }

  getLoggedUser(){
    this.authentification.getLoggedUser().subscribe(
      (response: any) => {
        this.loggedUsername = response.username;
        this.loggedEmail = response.email;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  onOpenSettings(){
    this.dialog.open(DialogsettingsComponent);
  }

  onLogout(){
    this.logoutservice.logOut();
  }

}
