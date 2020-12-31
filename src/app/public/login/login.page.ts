import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string = "";
  password: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }


  loginSubmit(){
    this.router.navigateByUrl('/app');
  }
}
