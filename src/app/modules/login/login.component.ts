import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router, private loginservice: AuthentificationService,  private snackBar: MatSnackBar) { }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['/home'])
          this.invalidLogin = false
          this.openSnackBar('Bienvenue ! '+this.username);
        },
        error => {
          this.invalidLogin = true;
          this.openSnackBar('Identifiant ou mot de passe incorrect.');
        }
      )

    );
  }

  openSnackBar(message, action?) {
    let snackbarref = this.snackBar.open(message, action, {duration:2500});
  }

}

