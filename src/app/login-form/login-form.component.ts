import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email;
  password;
  loginButton;
  isValidEmail;
  constructor(public toastr: ToastsManager,vcr : ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  allInputValied(): boolean{
    return false;
  }

  logIn(){
    
    if(this.allInputValied()){
      this.toastr.success('You are awesome!', 'Success!');
    }
    else
    {
      this.toastr.error('This is not good!', 'Oops!');
    }
  }

  CheckEmail(){
    
  }
}
