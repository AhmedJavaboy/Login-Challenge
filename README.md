# Natural Cycles Challange 

This project is built based on [Angular CLI] version 1.0.0. 

## Description

#### UX

## Setup
#### Prerequisites

This project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.[Node Download](https://nodejs.org/en/download/)

#### Install

After downloading this project you need to open terminal in this project and run `npm install` to install node modules.
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
