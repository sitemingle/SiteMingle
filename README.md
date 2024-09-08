# SiteMingle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

### Hosting on git, install the below library

ng add angular-cli-ghpages

### ng build --base-href "https://www.userName.github.io/repoName"

ng build --base-href "https://sitemingle.github.io/SiteMingle/"

## --dir is the directory where index.html is there after build in the dist folder, below command will create a gh-pages branch from where your site will be hosted

npx angular-cli-ghpages --dir=dist/site-mingle/browser

## site will be live at https://sitemingle.github.io/SiteMingle/
### end

# how to install lint and prettier
ng add @angular-eslint/schematics

npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-config-prettier --save-dev

npm install prettier --save-dev

## Add below line in package.json in script tag
"scripts": {
  "lint": "ng lint --fix && npm run prettier",
  "prettier": "npx prettier --write ."
}


