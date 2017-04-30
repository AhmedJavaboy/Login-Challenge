import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MatchStatus } from './match-enum';
import { FormGroup } from '@angular/forms';

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
  text_color: string = 'text-danger';
  validUrls;
  recomendedEmail: string = '';

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.validUrls = { domains: [{ domain: "gmail.com" }, { domain: "yahoo.com" }] }

  }

  changeEmailInto($event) {
    this.email = this.recomendedEmail;
    console.log('i am here');
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

  /// return 1 if complete match 
  /// return 2 if alike 
  /// return 0 if not match 
  // i use enum instead to represent return value
  checkForSimilarEmail(email) {
    let returnValue = MatchStatus.notMatch;
    let emailParts = email;
    this.validUrls.domains.forEach(element => {// loop each vaild domain

      let toMatch = '@' + element.domain;
      let stringStartAt = email.length - toMatch.length;
      let emailPart = email.substring(stringStartAt);
      if (emailPart == toMatch) {//if they match return MatchStatus.exact which mean perfect format
        this.emailMessage = "";
        this.css_class = ' has-success';
        returnValue = MatchStatus.exact;
        return MatchStatus.exact;
      }
      else if (this.stringSimilar(emailPart, toMatch)) {  // 
        if (email[stringStartAt] == "@") {
          this.recomendedEmail = email.substring(0, stringStartAt) + toMatch;
        } else {
          this.recomendedEmail = email.substring(0, stringStartAt + 1) + toMatch;
        }
        this.css_class = ' has-success';
        this.text_color = ' text-default';
        returnValue = MatchStatus.alike;
        return MatchStatus.alike;
      }
    });
    return returnValue;
  }

  
  validateEmail(test) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(test);
  }
  /// check if email correct =1 ,empty =0 ,or wrong formated = 2
  checkEmailFormat(email) {
    let emailParts;
    // Check if email string is null or emapty
    if (email == null || email == "") {
      this.emailMessage = 'you must enter your email';
      this.css_class = ' has-danger';
      return false;
    } else {
      if (this.validateEmail(email)) {
        this.emailMessage = "Valid email \u2713";
        this.css_class = ' has-success';
        this.text_color = ' text-success';
        return true;
      }
      else {
        this.emailMessage = "Invalid email";
        this.css_class = ' has-danger';
        this.text_color = ' text-danger';
        return false;
      }
    }
  }


  haveValidPassword() {
    if (this.password.length > -1) {
      this.passwordMessage = "";
      return true;
    }
    this.passwordMessage = "Enter password";
    return false;
  }
  CheckFieldEmail($event) {
    if (this.checkEmailFormat(this.email) && this.checkForSimilarEmail(this.email) == MatchStatus.alike) {
      if (this.validateEmail(this.recomendedEmail)) {
        this.emailMessage = "Valid email \u2713" +
          " but do you mean " + this.recomendedEmail;
        this.isValid = true;
      }
      else {
        this.emailMessage = "Invalid email, You used an unallowed character";
        this.isValid = false;
        this.css_class = ' has-danger';
        this.text_color = ' text-danger';
      }

    }
    else if (this.checkForSimilarEmail(this.email) == MatchStatus.alike) {
      if (this.validateEmail(this.recomendedEmail)) {
        this.emailMessage = "Invalid email," + " do you mean " + this.recomendedEmail;
      }
      else {
        this.emailMessage = "Invalid email, You used an unallowed character";
      }
      this.css_class = ' has-danger';
      this.text_color = ' text-danger';
      this.isValid = false;
    }
    else if (this.checkEmailFormat(this.email)) {
      this.emailMessage = "Valid email \u2713";
      this.css_class = ' has-success';
      this.text_color = ' text-success';
      this.isValid = true;
    }
    else {
      this.isValid = false;
    }
  }

  CheckFields($event) {
    if (this.checkEmailFormat(this.email) && this.checkForSimilarEmail(this.email) == MatchStatus.alike && this.haveValidPassword()) {

      if (this.validateEmail(this.recomendedEmail)) {
        this.emailMessage = "Valid email \u2713" +
          " but do you mean " + this.recomendedEmail;
        this.isValid = true;
      } else {
        this.emailMessage = "Invalid email, You used an unallowed character";
        this.isValid = false;
        this.css_class = ' has-danger';
        this.text_color = ' text-danger';
      }

    }
    else if (this.checkForSimilarEmail(this.email) == MatchStatus.alike && this.haveValidPassword()) {

      if (this.validateEmail(this.recomendedEmail)) {
        this.emailMessage = "Invalid email," + " do you mean " + this.recomendedEmail;
      }
      else {
        this.emailMessage = "Invalid email, You used an unallowed character";
      }
      this.css_class = ' has-danger';
      this.text_color = ' text-danger';
      this.isValid = false;

    }
    else if (this.checkEmailFormat(this.email) && this.haveValidPassword()) {
      this.emailMessage = "Valid email \u2713";
      this.css_class = ' has-success';
      this.text_color = ' text-success';
      this.isValid = true;
    }
    else {
      this.isValid = false;
    }

  }
}
