import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  let de: DebugElement;
  let el: HTMLInputElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [ToastsManager, ToastOptions],
      declarations: [LoginFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not enable login button if we have no values', () => {
    // arrange
    const fixture = TestBed.createComponent(LoginFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    // act
    de = fixture.debugElement.query(By.css('#loginButton'));
    el = de.nativeElement;

    // assume 
    expect(el.disabled).toEqual(true);
  });

  it(' have a working CheckEmail service ', () => {
    // arrange
    // test cases - testing for success
    var validEmails = [
      'test@gmail.com',
      'test1@gmail.com',
      'test2@gmail.com'
    ];

    // test cases - testing for failure
    var invalidEmails = [
      'user@gnail.com',
      'test@ gmail.com',
      'ghgf@gmail.com.',
      'tes@t@gmail.com',
      'abcgmail.com'
    ];
    // arrange
    const fixture = TestBed.createComponent(LoginFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(component.email.legnth).toBeGreaterThan(0);
    // act
    de = fixture.debugElement.query(By.css('#loginButton'));
    el = de.nativeElement;

    // assume 
    expect(el.disabled).toEqual(true);
  });

  /**
   * it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));
   */

});
/*
describe("Unit Testing Examples", function() {

  beforeEach(angular.mock.module('App'));

  it('should have a LoginCtrl controller', function() {
    expect(App.LoginCtrl).toBeDefined();
  });

  it('should have a working LoginService service', inject(['LoginService',
    function(LoginService) {
      expect(LoginService.isValidEmail).not.to.equal(null);

      // test cases - testing for success
      var validEmails = [
        'test@test.com',
        'test@test.co.uk',
        'test734ltylytkliytkryety9ef@jb-fe.com'
      ];

      // test cases - testing for failure
      var invalidEmails = [
        'test@testcom',
        'test@ test.co.uk',
        'ghgf@fe.com.co.',
        'tes@t@test.com',
        ''
      ];

      // you can loop through arrays of test cases like this
      for (var i in validEmails) {
        var valid = LoginService.isValidEmail(validEmails[i]);
        expect(valid).toBeTruthy();
      }
      for (var i in invalidEmails) {
        var valid = LoginService.isValidEmail(invalidEmails[i]);
        expect(valid).toBeFalsy();
      }

    }])
  );
});*/