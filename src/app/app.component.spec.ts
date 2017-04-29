import { TestBed, async } from '@angular/core/testing';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {ToastsManager , ToastOptions} from 'ng2-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [
        AppComponent,LoginFormComponent
      ],
       providers: [ToastsManager,ToastOptions],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});
