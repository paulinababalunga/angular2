import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private route: Router) {
  }

  // template driven forms

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.route.navigate(['events']);
  }

  cancel() {
    this.route.navigate(['events']);
  }
}
