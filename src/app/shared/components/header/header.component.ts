import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsettingsComponent } from 'src/app/dialog/dialogsettings/dialogsettings.component';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public dialog:MatDialog, private logoutservice: AuthentificationService) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(() =>{
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }

  onOpenSettings(){
    this.dialog.open(DialogsettingsComponent);
  }

  onLogout(){
    this.logoutservice.logOut();
  }

}
