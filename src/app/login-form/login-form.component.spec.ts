import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import {MatchStatus} from './match-enum';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import ValidEmailList from '../data/valid-emails';
import InvalidEmailList from '../data/invalid-emails';
import SimilarEmailList from '../data/similar-emails';
import NonSimilarEmailList from '../data/non-similar-emails';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  let http: Http;

  let result: Object;

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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not enable login button by default', () => {
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
  
  describe(' Methods', () => {
    it(' have a working validateEmail Method', () => {
      spyOn(component, 'validateEmail').and.callThrough();
      ValidEmailList.forEach(element => {
        let result =component.validateEmail(element.email);
        expect(result).toBe(true,'Epexted \"'+element.email + '\" to be valid');
      });
      InvalidEmailList.forEach(element => {
        let result =component.validateEmail(element.email);
        expect(result).toBe(false),'Epexted \"'+element.email + '\" to be invalid';
      });
    });

    it(' have a working checkEmailFormat Method', () => {
      spyOn(component, 'checkEmailFormat').and.callThrough();
      ValidEmailList.forEach(element => {
        let result =component.checkEmailFormat(element.email);
        expect(result).toBe(true,'Epexted \"'+element.email + '\" to be valid');
      });
      InvalidEmailList.forEach(element => {
        let result =component.checkEmailFormat(element.email);
        expect(result).toBe(false),'Epexted \"'+element.email + '\" to be invalid';
      });
    });

  /// return 1 if complete match 
  /// return 2 if alike 
  /// return 0 if not match 
    it(' have a working stringSimilar(s1, s2) Method', () => {
     spyOn(component, 'stringSimilar').and.callThrough();
      SimilarEmailList.forEach(element => {
        let toMatch ='gmail.com';
        let testStringStartAt = element.email.length - toMatch.length;
        let emailParts= element.email.substring(testStringStartAt);
        let result =component.stringSimilar(emailParts,toMatch);
        expect(result).toBe(true,'Epexted \"'+emailParts + '\" to be similar to '+toMatch);
      });
      NonSimilarEmailList.forEach(element => {
        let toMatch ='gmail.com';
        let testStringStartAt = element.email.length - toMatch.length;
        let emailParts= element.email.substring(testStringStartAt);
        let result =component.stringSimilar(emailParts,toMatch);
        expect(result).toBe(false,'Epexted \"'+emailParts + '\" to be not similar to '+toMatch);
      });
    });

    it(' have a working checkForSimilarEmail Method', () => {
     spyOn(component, 'checkForSimilarEmail').and.callThrough();
      SimilarEmailList.forEach(element => {
        let result =component.checkForSimilarEmail(element.email);
        expect(result).toBe(MatchStatus.alike,'Epexted \"'+element.email + '\" to be similar to');
      });
      NonSimilarEmailList.forEach(element => {
        let result =component.checkForSimilarEmail(element.email);
        expect(result).toBe(MatchStatus.notMatch),'Epexted \"'+element.email + '\" to be not similar to';
      });
    });
    
  });

});
/**
 * 
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
 */


/*
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

      // test cases - testing for success
      var validEmails2 = [
        'test@test.com',
        'test@test.co.uk',
        'test734ltylytkliytkryety9ef@jb-fe.com'
      ];

      // test cases - testing for failure
      var invalidEmails2 = [
        'test@testcom',
        'test@ test.co.uk',
        'ghgf@fe.com.co.',
        'tes@t@test.com',
        ''
      ];
 */
/**
   * it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));
   */
