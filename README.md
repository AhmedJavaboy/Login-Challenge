# Natural Cycles Challange 

## Description
#### UI
This project uses bootstrap and toastr to enhance ui and it is responsive on web and mobile.
<img src="https://github.com/AhmedJavaboy/Login-Challenge/blob/master/template/image1.PNG" width="350" />
<img src="https://github.com/AhmedJavaboy/Login-Challenge/blob/master/template/image2.PNG" width="350" />

#### UX

This project aims to improve user experince while user tries to login into system.
It provide user with good colors which represent if email is invalid(red) or valid(green).
I have 4 main cases when user tries to login.
1. user enter valid format similar to gmail.com or yahoo.com (you can add to array for more options).
  * Allow login and offer another format.
  * Display error message with description if user enter invalid characters.
2. user enter invalid format but similar to gmail.com or yahoo.com
  * Login is diabled and offer anoher correct format.
  * Display error message with description if user enter invalid characters.
3. user enter correct format but not similar to gmail.com or yahoo.com
  * Allow login and display valid email message.
4. user enter wrong formatand and neither similar to gmail.com nor yahoo.com
  * Disallow login and display invalid email message. 

#### TDD

##### About tests

All tests are writen via [Jasmine](https://github.com/jasmine/jasmine). I focused on email validation methods more than testing ui because it was very critical to be able to match requirement.

##### To add to my test cases 
1. open ~/src/app/data/ and you will find 4 .ts files with json
2. add to them your test cases
3. run tests using `ng test`

## Setup
#### Prerequisites

This project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.[Node Download](https://nodejs.org/en/download/)

#### Install

##### Node Modules

After downloading this project you need to open terminal in this project and run `npm install` to install node modules.

##### Angular Cli

you need to open terminal, navigate to this project and run `npm install -g @angular/cli` to install Angular Cli.

##### Start in dev mode

Run `ng serve` for a dev server.
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Use the `-prod` flag for a production build. Like `ng serve -prod`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Testing

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
All tests are writen via [Jasmine](https://github.com/jasmine/jasmine).

#### Test Cases

* AppComponent
  * should create the app
* LoginFormComponent
  * should be created
  * should not enable login button by default
  * have a working CheckEmailFormat Method
  * Methods
    * have a working validateEmail Method
    * have a working checkEmailFormat Method
    * have a working stringSimilar(s1, s2) Method
    * have a working checkForSimilarEmail Method

## Further help on Angular CLI

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
