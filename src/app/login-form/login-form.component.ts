import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  emailMessage: string = '';
  passwordMessage: string = '';
  userForm: any;
  loginButton;
  isValid: boolean = false;
  css_class: string = '';
  text_color:string = 'text-danger';
  validUrls;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.validUrls = { domains: [{ domain: "gmail.com" }, { domain: "yahoo.com" }] }

  }

  matchUserInfo(): boolean {
    return true; // i assume that i can login everytime i get valid input from user
  }

  // display success if user entered right informatins
  // display error toastr if user entered wrong informatins
  // Maybe do some stuff accourding to server response such as user image if your email is correct
  logIn() {
    if (this.matchUserInfo()) {
      this.toastr.success('Welcome user!', 'Success'); // i display success toatr if user login success
    }
    else {
      this.toastr.error('Wrong username or password try again!', 'Oops!');
    }
  }

  /// search characters for Similarities
  /// this function is pretty simple ,it will pass gnail.com test case or similar
  /// Note: There are alot of solutions for this problem such as using https://www.npmjs.com/package/string-similarity
  /// More examples https://www.npmjs.com/browse/keyword/similarity 
  stringSimilar(s1: string, s2: string) {
    let similarity = 0;
    for (let index = 0; index < s2.length && index < s1.length; index++) {
      if (s1[index] == s2[index])
        similarity++;
    }
    if (similarity >= s2.length - 2) {
      return true;
    }
    else {
      return false;
    }
  }

  /// check if email correct =1 ,wrong formated =0 ,or similar to = 2
  checkEmailFormat() {
    let emailParts;

    // Check if email string is null or emapty
    if (this.email == null || this.email == "") {
      this.emailMessage = 'you must enter valied email';
      this.css_class = ' has-error';
      return false;
    }

    // Check if email have @ sign
    let atSign = this.email.indexOf('@');
    if (atSign == -1) {
      this.emailMessage = '@ is missing from ' + this.email;
      this.css_class = ' has-error';
      return false;
    }
    this.emailMessage = '';
    emailParts = this.email.split('@');
    let returnValue;
    this.validUrls.domains.forEach(element => {// loop each vaild domain
      let s1 = emailParts[1];
      let s2 = element.domain;
      if (s2==s1) {//if they match return 1; which mean perfect format
        this.emailMessage = "";
        this.css_class = ' has-success';
        returnValue = 1;
        return true;
      } else if (this.stringSimilar(s1, s2)) {  // 
        this.emailMessage = "do you mean "+emailParts[0]+'@'+s2;
        this.css_class = ' has-warning';
        returnValue = 2;
        return false;
      }
    });
    if (returnValue == 1)
      return true;
    else if (returnValue == 2)
      return false;
    else {
      this.emailMessage = "unacceprable domain name";
      this.css_class = ' has-error';
      return false;
    }
  }


  haveValidPassword() {
    if (this.password.length > 0) {
      this.passwordMessage = "";
      return true;
    }
      this.passwordMessage = "Short password";
    return false;
  }

  CheckFields($event) {
    if (this.checkEmailFormat() && this.haveValidPassword()) {
      this.isValid = true;
    }
    else {
      this.isValid = false;
    }
  }
}
