<img src="./src/assets/mr-doctor.jpeg" width="35%">

# Top Secret - Physician Calendar

## Project Summary

We need a way to review calendars of physicians using the Top Secret platform to
ensure they’re being imported correctly from the physician’s existing system of record. The task
is to build a web back-end that will return a list of physicians and a list of today’s appointments
for a selected physician, and a corresponding front-end to render the data.

This application was created using `Angular`.

## Setup

1. `fork` and `clone` this repository.
2. `cd` into the project directory.
3. Run `npm install` to install current dependencies.
4. Run `npm run start` for a dev server. Navigate to `http://localhost:4201/`
5. Run `json-server --watch db.json` to establish our fake REST API. Data can be seen at `http://localhost:3000/`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
