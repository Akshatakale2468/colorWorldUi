import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginObj = {
    username : '',
    password : ''
  }
  
  constructor(private route :Router){
  
  }
  
  onLogin(){
    debugger;
    if(this.loginObj.username == 'admin' && this.loginObj.password == '12345'){
     localStorage.setItem('loginDetails',this.loginObj.username)
      this.route.navigateByUrl('dashboard');
    } else {
      alert ('Wrong username or password')
    }
  }
}
